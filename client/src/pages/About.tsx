import { motion } from "framer-motion";
import teamImage from "@assets/generated_images/professional_construction_team.png";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">About N&P Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building trust through quality craftsmanship since 2008.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl transform -rotate-2"></div>
              <img 
                src={teamImage} 
                alt="Our Team" 
                className="relative rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold font-heading text-primary mb-6">Our History & Mission</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2008 by Margarito Garcia, N&P Services began with a simple mission: to deliver construction services that homeowners and businesses could truly rely on. With over 17 years of experience, we have grown from a small operation into a leading construction firm in League City, Texas.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are dedicated to top-tier construction solutions with a relentless focus on quality, sustainability, and client satisfaction. Our A+ rating from the BBB is a testament to our commitment to doing things right.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["17+ Years Experience", "A+ BBB Rated", "Family Owned", "Quality Guaranteed"].map((item) => (
                <div key={item} className="flex items-center text-slate-800 font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Meet Our Leadership</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Owner Profile */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl overflow-hidden">
                {/* Placeholder for owner image if specific one not available */}
                <span className="text-slate-400 font-bold">MG</span> 
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">Margarito Garcia</h3>
              <p className="text-primary font-medium mb-4">Founder & Owner</p>
              <p className="text-muted-foreground">
                A dedicated professional with extensive expertise in all facets of construction. Margarito leads with a vision of precision and integrity, ensuring every project meets the highest standards.
              </p>
            </div>

            {/* General Team Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center flex flex-col justify-center">
               <h3 className="text-2xl font-bold font-heading mb-4">Our Skilled Team</h3>
               <p className="text-muted-foreground mb-6">
                 We employ a dedicated team of craftsmen, project managers, and specialists who share our values. Every member of our crew is vetted for skill and professionalism.
               </p>
               <div className="text-primary font-bold text-lg">
                 Expertise you can trust.
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
