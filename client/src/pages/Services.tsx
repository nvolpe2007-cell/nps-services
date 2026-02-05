import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Building } from "lucide-react";
import resImage from "@assets/portfolio/kitchen_remodel_1.webp";
import comImage from "@assets/portfolio/commercial_slab_new.webp";

export default function Services() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive construction solutions for every need, delivered with precision.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="residential" className="w-full">
          <div className="flex justify-center mb-12">
             <TabsList className="flex gap-4 h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="residential" 
                className="px-8 py-4 text-base font-bold uppercase tracking-wider border-2 border-slate-300 bg-white text-slate-700 hover:border-red-500 hover:text-red-600 transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:border-red-600 data-[state=active]:shadow-lg"
              >
                Residential
              </TabsTrigger>
              <TabsTrigger 
                value="commercial" 
                className="px-8 py-4 text-base font-bold uppercase tracking-wider border-2 border-slate-300 bg-white text-slate-700 hover:border-red-500 hover:text-red-600 transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:border-red-600 data-[state=active]:shadow-lg"
              >
                Commercial
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="residential" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold font-heading text-primary mb-6 flex items-center">
                  <Hammer className="mr-3 h-8 w-8" /> Residential Construction
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We transform houses into dream homes. Whether you're looking to build from the ground up or renovate your existing space, our team delivers high-quality craftsmanship.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "New Home Builds", "Kitchen Remodeling", "Bathroom Renovations", 
                    "Home Additions", "Custom Fences", "Decks & Patios", 
                    "Flooring Installation", "Siding Replacement"
                  ].map((item) => (
                    <div key={item} className="flex items-center p-3 bg-white rounded-lg border shadow-sm">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 h-96 rounded-xl overflow-hidden shadow-2xl">
                <img src={resImage} alt="Residential Services" className="w-full h-full object-cover" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold font-heading text-primary mb-6 flex items-center">
                  <Building className="mr-3 h-8 w-8" /> Commercial Construction
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                   We understand that time is money in commercial projects. We deliver efficient, durable, and code-compliant construction services for businesses of all sizes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "General Construction", "Site Work", "Utilities Installation", 
                    "Multi-Family Projects", "Retail Build-outs", "Office Renovations",
                    "Warehouse Construction", "Project Management"
                  ].map((item) => (
                    <div key={item} className="flex items-center p-3 bg-white rounded-lg border shadow-sm">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 h-96 rounded-xl overflow-hidden shadow-2xl">
                <img src={comImage} alt="Commercial Services" className="w-full h-full object-cover" />
              </div>
            </div>
          </TabsContent>

                  </Tabs>
      </div>
    </div>
  );
}
