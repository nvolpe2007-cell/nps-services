import { Link } from "wouter";
import { Facebook, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";
import { trackCall } from "@/lib/tracking";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="block mb-4">
              <img 
                src={logo} 
                alt="N&P Services LLC" 
                className="h-20 w-auto object-contain bg-white p-2 rounded-md"
                width="80"
                height="80"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Excellence in construction. Building your vision with precision and integrity for over 17 years.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.facebook.com/nandpservices/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.bbb.org/us/tx/league-city/profile/construction-services/n-p-services-0915-90009898" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-800 px-3 py-1 rounded-full hover:bg-primary transition-colors text-xs font-bold flex items-center"
              >
                BBB A+
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Products", href: "/products" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors flex items-center text-sm">
                    <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Residential Construction",
                "Commercial Projects",
                "Remodeling & Renovations",
                "Concrete & Paving",
                "Site Work & Utilities",
                "RV Park Construction",
              ].map((service) => (
                <li key={service} className="text-slate-300 text-sm flex items-start">
                   <span className="block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                   {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>PO Box 654<br />League City, TX 77573</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:832-226-4018" onClick={() => trackCall("footer")} className="hover:text-white">832-226-4018</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:NinoFarias@nandpservices.com" className="hover:text-white break-all">NinoFarias@nandpservices.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} N&P Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
