import { useEffect } from "react";
import { useLocation } from "wouter";
import { CheckCircle, Phone, MessageCircle, ChevronRight, Star, Shield, Clock, Building2 } from "lucide-react";
import { trackLandingCall, trackLandingText } from "@/lib/tracking";

export default function CommercialLanding() {
  const [, setLocation] = useLocation();
  const preWrittenMessage = encodeURIComponent("I need a commercial construction quote!");

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        'send_to': 'AW-17916018158',
        'page_title': 'Commercial Landing Page'
      });
    }
  }, []);

  const handleTextClick = () => {
    trackLandingText("commercial_lead");
    window.location.href = `sms:832-704-5525?body=${preWrittenMessage}`;
    setTimeout(() => {
      setLocation("/thank-you");
    }, 500);
  };

  const handleCallClick = () => {
    trackLandingCall("commercial_call");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">
                Commercial Construction
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Commercial Construction You Can Trust
            </h1>
            <div className="h-1 bg-red-500 w-24 mx-auto mb-6" />
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              From ground-up builds to tenant improvements. Steel buildings, site work, and multi-family projects across Greater Houston.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleTextClick}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-bold text-base tracking-wider uppercase transition-all hover:scale-105"
                style={{ boxShadow: '0 8px 30px rgba(220, 38, 38, 0.4)' }}
                data-testid="lp-text-button"
              >
                <MessageCircle className="w-5 h-5" />
                Request Bid
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
                <span>17+ Years Experience</span>
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
              Commercial Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ground-Up Construction",
                "Steel & Metal Buildings",
                "Tenant Build-Outs",
                "Site Work & Grading",
                "Utility Installation",
                "Multi-Family Projects",
                "Warehouse Construction",
                "RV Parks & Facilities"
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
              "N&P Services completed our warehouse build on time and under budget. Their attention to detail and professionalism made all the difference."
            </p>
            <p className="text-slate-500 font-medium">— Houston Business Owner</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Why Businesses Choose N&P Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-slate-600 text-sm">Full coverage for your peace of mind on every project</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">On-Time Delivery</h3>
                <p className="text-slate-600 text-sm">We respect your timeline and budget constraints</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quality Work</h3>
                <p className="text-slate-600 text-sm">17+ years of proven excellence in Houston</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Get a competitive bid from Houston's trusted commercial contractor.
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
