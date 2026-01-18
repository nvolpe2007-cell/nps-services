import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Hammer } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2 cursor-pointer">
              <div className="bg-primary p-2 rounded-md">
                <Hammer className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className={cn(
                "text-2xl font-bold font-heading tracking-tight",
                scrolled ? "text-primary" : "text-white"
              )}>
                N&P Services
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent uppercase tracking-wide",
                    location === link.href
                      ? "text-accent font-bold"
                      : scrolled ? "text-foreground" : "text-white/90"
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                variant={scrolled ? "default" : "secondary"}
                className={cn(
                  "font-bold",
                  !scrolled && "bg-white text-primary hover:bg-white/90"
                )}
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "block text-lg font-medium py-2 px-4 rounded-md transition-colors",
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <div className="pt-4 border-t">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
               <Button className="w-full">Get a Quote</Button>
            </Link>
            <div className="mt-4 flex items-center justify-center text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:832-704-5525">832-704-5525</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
