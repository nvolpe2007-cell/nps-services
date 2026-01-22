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
        <div className="mb-24 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold font-heading text-primary mb-6">Our History & Mission</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2008 by Nino Farias, N&P Services began with a simple mission: to deliver construction services that homeowners and businesses could truly rely on. Operating as a dedicated sole proprietorship, we treat every client like our only client. With over 17 years of experience, we have grown into a leading construction firm in League City, serving the entire Greater Houston region.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are widely recognized as <strong>Houston's parking lot and asphalt experts</strong>, while also delivering top-tier residential and commercial construction solutions. Our A+ rating from the BBB is a testament to our commitment to precision, integrity, and customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["17+ Years Experience", "A+ BBB Rated", "Parking Lot Experts", "Greater Houston Area"].map((item) => (
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
                <span className="text-slate-400 font-bold">NF</span> 
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">Nino Farias</h3>
              <p className="text-primary font-medium mb-4">Founder & Owner</p>
              <p className="text-muted-foreground">
                Nino believes in producing only the best work possible on every project. His dedication to quality and client satisfaction has earned him a loyal following - clients love working with him and consistently return for future projects.
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
