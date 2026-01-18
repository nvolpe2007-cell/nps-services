import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Check if Resend integration is available
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        return res.status(503).json({ 
          message: "Email service not configured. Please contact us directly at ninofarias@nandpservices.com or call (832) 704-5525." 
        });
      }

      // Send email using Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "N&P Services Website <onboarding@resend.dev>", // Default Resend sender for testing
          to: ["ninofarias@nandpservices.com"], // Business email
          subject: `New Contact Form Submission - ${data.service}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Resend API error:", error);
        return res.status(500).json({ message: "Failed to send email. Please try again or contact us directly." });
      }

      return res.status(200).json({ 
        message: "Thank you for contacting us! We'll get back to you shortly." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.errors });
      }
      console.error("Contact form error:", error);
      return res.status(500).json({ message: "An error occurred. Please try again." });
    }
  });

  return httpServer;
}
