import { Switch, Route, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { BackToTop } from "@/components/BackToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Testimonials from "@/pages/Testimonials";
import ThankYou from "@/pages/ThankYou";
import ConcreteLanding from "@/pages/landing/ConcreteLanding";
import CommercialLanding from "@/pages/landing/CommercialLanding";
import ResidentialLanding from "@/pages/landing/ResidentialLanding";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Products from "@/pages/Products";

function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsVisible(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsVisible(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div 
      className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
            <Route path="/reviews" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/lp/concrete" component={ConcreteLanding} />
      <Route path="/lp/commercial" component={CommercialLanding} />
      <Route path="/lp/residential" component={ResidentialLanding} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/products" component={Products} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <PageTransition>
              <Router />
            </PageTransition>
          </main>
          <Footer />
          <StickyCallButton />
          <BackToTop />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
