import { Hero } from "@/components/home/Hero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Home as HomeIcon, Building2, Truck, Star, Quote } from "lucide-react";
import resImage from "@assets/generated_images/residential_renovation.png";
import comImage from "@assets/generated_images/commercial_building_site.png";
import specImage from "@assets/generated_images/construction_hero_background.png"; // reusing hero for specialized for now
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                Excellence in Construction Since 2008
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                N&P Services is a premier construction firm based in League City, Texas. Founded by Margarito Garcia, we have built a reputation for delivering top-tier construction solutions with a focus on quality, sustainability, and client satisfaction.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether it's a dream home renovation, a complex commercial build, or specialized site work, our A+ rated team brings precision and integrity to every project.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  More About Us
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={resImage} 
                  alt="Quality Construction" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-lg shadow-lg hidden lg:block">
                <p className="text-white text-xl font-heading font-bold mb-2">Trustworthy &</p>
                <p className="text-blue-200 text-lg">Reliable Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive construction services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Residential Construction"
              description="From new builds to comprehensive remodeling including kitchens, bathrooms, additions, decks, and siding. We build homes that last."
              icon={<HomeIcon className="h-6 w-6 text-primary" />}
              image={resImage}
              link="/services#residential"
            />
            <ServiceCard 
              title="Commercial Projects"
              description="Expert general construction, site work, utilities, and multi-family projects. We understand the demands of commercial timelines."
              icon={<Building2 className="h-6 w-6 text-primary" />}
              image={comImage}
              link="/services#commercial"
            />
            <ServiceCard 
              title="Specialized Services"
              description="RV park construction, detention ponds, land clearing, asphalt striping, concrete repair, and parking lot services."
              icon={<Truck className="h-6 w-6 text-primary" />}
              image={specImage}
              link="/services#specialized"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Quote className="h-96 w-96 -mr-20 -mt-20" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "N&P Services transformed our outdated kitchen into a modern masterpiece. The team was professional, clean, and finished on time!",
                author: "Sarah Jenkins",
                role: "Homeowner"
              },
              {
                text: "We hired them for a large parking lot resurfacing project. Their attention to detail and communication was outstanding throughout the process.",
                author: "Robert Chen",
                role: "Property Manager"
              },
              {
                text: "The best construction experience we've had. Reliable, honest, and high-quality work on our commercial addition.",
                author: "Michael Torres",
                role: "Business Owner"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-slate-100">"{review.text}"</p>
                <div>
                  <div className="font-bold text-white">{review.author}</div>
                  <div className="text-sm text-blue-200">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact us today for a free consultation and quote. Let's build something great together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
