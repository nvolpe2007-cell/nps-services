import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowLeft, Heart, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ThankYou() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17916018158/contact_form_submit'
      });
      window.gtag('event', 'generate_lead', {
        'send_to': 'AW-17916018158'
      });
    }
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Thank You So Much!
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed">
            We truly appreciate you reaching out to N&P Services.
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10 border border-slate-100">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed">
              Your message means a lot to us. With over <strong>17 years of experience</strong> serving the Greater Houston area, 
              we take every project personally. Whether it's a small repair or a major construction project, 
              we treat your home or business like it's our own.
            </p>

            <div className="flex items-center justify-center gap-2 text-red-600 mb-6">
              <Heart className="w-5 h-5 fill-red-600" />
              <span className="font-semibold">Family-owned & operated since 2008</span>
            </div>

            <p className="text-lg text-slate-600 mb-8">
              <strong>Nino Farias</strong>, our owner, will personally review your request and get back to you 
              <strong> within 24 hours</strong> — often much sooner. We're excited to learn more about your project 
              and show you why so many Houston families trust us with their construction needs.
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-700 bg-slate-50 rounded-xl p-4 mb-8">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-medium">A+ BBB Rating • Licensed & Insured • Free Estimates</span>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Need to reach us right away?</h2>
              <p className="text-slate-600 mb-6">We're here for you Monday - Friday, 8 AM - 5 PM</p>
              <a 
                href="tel:832-704-5525" 
                className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
                data-testid="thank-you-call-button"
              >
                <Phone className="w-6 h-6" />
                Call (832) 704-5525
              </a>
            </div>
          </div>

          <p className="text-slate-500 mb-8 italic">
            "We don't just build structures — we build lasting relationships with our clients."
          </p>

          <Link href="/">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
