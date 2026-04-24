import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowLeft, Heart, Star, Shield } from "lucide-react";
import { trackCall } from "@/lib/tracking";

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
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-green-600" />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 border-l-4 border-green-500 mb-6">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-green-700">
                Message Sent Successfully
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              Thank You!
            </h1>
            <div className="h-1 bg-red-500 w-20 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-slate-600">
              We truly appreciate you reaching out to N&P Services.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 mb-10 border-l-4 border-red-500">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed text-center">
              Your message means a lot to us. With over <strong>17 years of experience</strong> serving the Greater Houston area, 
              we take every project personally. Whether it's a small repair or a major construction project, 
              we treat your home or business like it's our own.
            </p>

            <p className="text-base text-slate-600 text-center max-w-xl mx-auto">
              <strong>Nino Farias</strong>, our owner, will personally review your request and get back to you 
              <strong> within 24 hours</strong> — often much sooner. We're excited to learn more about your project 
              and show you why so many Houston families trust us with their construction needs.
            </p>
          </div>

          <div className="bg-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3 text-white">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">A+ BBB Rating • Licensed & Insured • Free Estimates</span>
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Need to reach us right away?</h2>
            <p className="text-slate-400 mb-6 text-sm uppercase tracking-wider">Monday - Friday, 8 AM - 5 PM</p>
            <a 
              href="tel:832-704-5525"
              onClick={() => trackCall("thank_you")}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
              data-testid="thank-you-call-button"
            >
              <Phone className="w-5 h-5" />
              Call (832) 704-5525
            </a>
          </div>

          <p className="text-slate-500 mb-10 italic text-center text-lg">
            "We don't just build structures — we build lasting relationships with our clients."
          </p>

          <div className="text-center">
            <Link href="/">
              <button className="inline-flex items-center gap-2 border-2 border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 px-8 py-4 font-bold text-sm tracking-wider uppercase transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
