import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Contact() {
  const [, setLocation] = useLocation();
  const preWrittenMessage = encodeURIComponent("I have a job for you!");

  const handleTextClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17916018158/contact_click'
      });
    }
    window.location.href = `sms:832-704-5525?body=${preWrittenMessage}`;
    setTimeout(() => {
      setLocation("/thank-you");
    }, 500);
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 border-l-4 border-red-500 mb-6">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-slate-700">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Get In Touch
          </h1>
          <div className="h-1 bg-red-500 w-20 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your project? Tap the button below to send us a quick text and we'll get back to you right away.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 p-8 md:p-12 lg:p-16 text-center mb-12">
            <MessageCircle className="w-14 h-14 md:w-16 md:h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              Text Us Now
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl mx-auto">
              One tap sends a pre-written message directly to our team. It's the fastest way to get a response.
            </p>
            
            <button
              onClick={handleTextClick}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 md:px-14 md:py-6 font-bold text-sm md:text-base tracking-wider uppercase transition-all hover:scale-105"
              data-testid="contact-text-button"
            >
              <MessageCircle className="w-5 h-5" />
              Send Text Message
              <ChevronRight className="w-5 h-5" />
            </button>

            <p className="text-slate-500 mt-6 text-sm">
              Opens your messaging app with a pre-written message
            </p>
          </div>

          <div className="text-center mb-10">
            <p className="text-slate-500 text-base uppercase tracking-wider font-medium">Or reach us another way</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            <a 
              href="tel:832-704-5525"
              className="group block bg-slate-900 p-6 md:p-8 hover:bg-red-600 transition-colors"
              data-testid="contact-call-link"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 group-hover:text-white/80 mb-1">Call Us</h3>
                  <p className="text-white text-xl font-bold">(832) 704-5525</p>
                </div>
              </div>
            </a>

            <a 
              href="mailto:ninofarias@nandpservices.com"
              className="group block bg-slate-900 p-6 md:p-8 hover:bg-red-600 transition-colors"
              data-testid="contact-email-link"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 group-hover:text-white/80 mb-1">Email Us</h3>
                  <p className="text-white text-sm md:text-base font-medium">ninofarias@nandpservices.com</p>
                </div>
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            <div className="bg-slate-100 p-6 border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Address</h3>
                  <p className="text-slate-800 font-medium">PO Box 654<br/>League City, TX 77573</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-6 border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Business Hours</h3>
                  <p className="text-slate-800 font-medium">Monday - Friday<br/>8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 overflow-hidden bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55539.47762287285!2d-95.13!3d29.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409a896688536b%3A0x77e5d45c73a49!2sLeague%20City%2C%20TX%2077573!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="N&P Services Location - League City, TX"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
