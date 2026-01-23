import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Reviews", href: "/reviews" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10",
        "bg-[#1a1a1a] text-white py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer group">
            <img 
              src={logo} 
              alt="N&P Services LLC" 
              className="h-14 md:h-20 w-auto object-contain bg-white p-2 md:p-3 rounded-md shadow-sm transition-transform active:scale-95"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-base font-semibold uppercase tracking-[0.1em] transition-colors hover:text-white/70",
                  location === link.href ? "text-white" : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

           {/* Right CTA */}
          <div className="hidden md:flex items-center">
             <a href="tel:832-704-5525" className="flex items-center bg-red-600 text-white px-7 py-3 text-base font-bold tracking-wider uppercase hover:bg-red-700 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                (832) 704-5525
             </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "block text-base font-bold uppercase tracking-widest py-3 border-b border-white/5 active:bg-white/10 -mx-2 px-2 transition-colors",
                location === link.href ? "text-white" : "text-white/70"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
             <a href="tel:832-704-5525" className="flex items-center justify-center w-full bg-red-600 text-white px-6 py-4 text-base font-bold tracking-widest uppercase active:bg-red-700 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
