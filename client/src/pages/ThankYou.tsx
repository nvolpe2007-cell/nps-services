import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
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
    }
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-slate-600 mb-8">
            Your message has been received. We'll get back to you within 24 hours to discuss your project.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Need to reach us sooner?</h2>
            <a 
              href="tel:832-704-5525" 
              className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (832) 704-5525
            </a>
          </div>

          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
