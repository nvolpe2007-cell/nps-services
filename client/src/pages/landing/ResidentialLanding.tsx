import { useEffect } from "react";
import { useLocation } from "wouter";
import { CheckCircle, Phone, MessageCircle, ChevronRight, Star, Shield, Clock, Home } from "lucide-react";
import { trackLandingCall, trackLandingText } from "@/lib/tracking";

export default function ResidentialLanding() {
  const [, setLocation] = useLocation();
  const preWrittenMessage = encodeURIComponent("I need a home construction/remodel quote!");

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        'send_to': 'AW-17916018158',
        'page_title': 'Residential Landing Page'
      });
    }
  }, []);

  const handleTextClick = () => {
    trackLandingText("residential_lead");
    window.location.href = `sms:832-704-5525?body=${preWrittenMessage}`;
    setTimeout(() => {
      setLocation("/thank-you");
    }, 500);
  };

  const handleCallClick = () => {
    trackLandingCall("residential_call");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-white" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">
                Residential Construction
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Build Your Dream Home
            </h1>
            <div className="h-1 bg-red-500 w-24 mx-auto mb-6" />
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              From new custom homes to kitchen remodels. Family-owned builder serving Houston families for 17+ years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleTextClick}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-bold text-base tracking-wider uppercase transition-all hover:scale-105"
                style={{ boxShadow: '0 8px 30px rgba(220, 38, 38, 0.4)' }}
                data-testid="lp-text-button"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <a
                href="tel:832-704-5525"
                onClick={handleCallClick}
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white text-white px-10 py-5 font-bold text-base tracking-wider uppercase transition-all hover:bg-white/10"
                data-testid="lp-call-button"
              >
                <Phone className="w-5 h-5" />
                Call (832) 704-5525
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>A+ BBB Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Residential Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Custom Home Builds",
                "Home Additions",
                "Kitchen Remodeling",
                "Bathroom Renovations",
                "Outdoor Kitchens & Living",
                "Decks & Patios",
                "Fencing & Gates",
                "Flooring Installation"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-5 border-l-4 border-red-500">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-slate-700 italic mb-6">
              "Nino and his team transformed our outdated kitchen into something we're proud to show off. They treated our home like it was their own."
            </p>
            <p className="text-slate-500 font-medium">— League City Family</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Why Houston Families Choose Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Family-Owned</h3>
                <p className="text-slate-600 text-sm">We treat every home like it's our own</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-slate-600 text-sm">Full protection for your peace of mind</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">A+ BBB Rating</h3>
                <p className="text-slate-600 text-sm">17+ years of trusted service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Get your free estimate today. No obligation — just honest, fair pricing.
          </p>
          
          <button
            onClick={handleTextClick}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-12 py-6 font-bold text-lg tracking-wider uppercase transition-all hover:scale-105"
            style={{ boxShadow: '0 8px 30px rgba(220, 38, 38, 0.4)' }}
          >
            <MessageCircle className="w-6 h-6" />
            Text Us Now
          </button>
        </div>
      </div>
    </div>
  );
}
