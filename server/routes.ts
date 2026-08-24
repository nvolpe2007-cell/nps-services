import type { Express } from "express";
import { storage } from "./storage";
import { z } from "zod";
import { sendContactNotificationSMS, isTwilioConfigured, getTwilioPhoneNumber } from "./sms";
import { sendContactEmail, isResendConfigured } from "./email";
import { insertReviewSchema } from "@shared/schema";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(10),
});

export function registerRoutes(app: Express): void {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      let emailSent = false;
      let smsSent = false;
      
      // Send SMS notification if Twilio is configured (primary notification method)
      const twilioConfigured = await isTwilioConfigured();
      if (twilioConfigured) {
        // Use env var or fall back to Twilio's configured phone number
        const notificationPhone = process.env.NOTIFICATION_PHONE_NUMBER || await getTwilioPhoneNumber();
        if (notificationPhone) {
          const smsResult = await sendContactNotificationSMS(notificationPhone, data);
          if (smsResult.success) {
            smsSent = true;
            console.log("SMS notification sent successfully to", notificationPhone);
          } else {
            console.error("SMS notification failed:", smsResult.error);
          }
        } else {
          console.warn("Twilio configured but no notification phone number available");
        }
      }

      // Send email using Resend integration
      const resendConfigured = await isResendConfigured();
      if (resendConfigured) {
        const emailResult = await sendContactEmail(data);
        if (emailResult.success) {
          emailSent = true;
          console.log("Email notification sent successfully to NinoFarias@nandpservices.com");
        } else {
          console.error("Email notification failed:", emailResult.error);
        }
      }

      // Check if at least one notification method succeeded
      if (!emailSent && !smsSent) {
        return res.status(503).json({ 
          message: "Unable to send your message. Please contact us directly at Brandon@lancaster-ent.net or call (832) 226-4018." 
        });
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

  // Submit a new review
  app.post("/api/reviews", async (req, res) => {
    try {
      const data = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(data);
      return res.status(201).json({ 
        message: "Thank you for your review! It will appear on our site after approval.",
        review 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid review data", errors: error.errors });
      }
      console.error("Review submission error:", error);
      return res.status(500).json({ message: "An error occurred. Please try again." });
    }
  });

  // Get approved reviews (public)
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getApprovedReviews();
      return res.status(200).json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return res.status(500).json({ message: "An error occurred." });
    }
  });

  // Serve sitemap.xml with correct content-type
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.sendFile("sitemap.xml", { root: "./dist/public" });
  });

  // Serve robots.txt with correct content-type
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.sendFile("robots.txt", { root: "./dist/public" });
  });

}
