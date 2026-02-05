import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
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
    <div className="pt-20 md:pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-center mb-4 md:mb-6">Get In Touch</h1>
        <p className="text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto text-base md:text-lg">
          Ready to start your project? Tap the button below to send us a quick text and we'll get back to you right away!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center mb-12 shadow-2xl">
            <MessageCircle className="w-16 h-16 md:w-20 md:h-20 text-blue-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Text Us Now
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto">
              One tap sends a pre-written message directly to our team. It's the fastest way to get a response!
            </p>
            
            <button
              onClick={handleTextClick}
              className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 md:px-16 md:py-8 rounded-2xl font-bold text-xl md:text-2xl transition-all hover:scale-105 shadow-xl"
              data-testid="contact-text-button"
            >
              <MessageCircle className="w-8 h-8" />
              Send Text Message
              <ArrowRight className="w-6 h-6" />
            </button>

            <p className="text-slate-400 mt-6 text-sm">
              Opens your messaging app with a pre-written message
            </p>
          </div>

          <div className="text-center mb-10">
            <p className="text-slate-500 text-lg mb-4">Or reach us another way:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <a 
              href="tel:832-704-5525"
              className="block"
              data-testid="contact-call-link"
            >
              <Card className="p-6 md:p-8 shadow-lg border-none bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-white/90 text-xl font-semibold">(832) 704-5525</p>
                  </div>
                </div>
              </Card>
            </a>

            <a 
              href="mailto:ninofarias@nandpservices.com"
              className="block"
              data-testid="contact-email-link"
            >
              <Card className="p-6 md:p-8 shadow-lg border-none bg-slate-800 text-white hover:bg-slate-700 transition-all hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-white/90 text-sm md:text-base">ninofarias@nandpservices.com</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-md bg-white">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Address</h3>
                  <p className="text-slate-600">PO Box 654<br/>League City, TX 77573</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-md bg-white">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Business Hours</h3>
                  <p className="text-slate-600">Monday - Friday<br/>8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 h-80 rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
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
