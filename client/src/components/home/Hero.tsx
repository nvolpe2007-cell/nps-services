import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/aerial_residential_property.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Luxury Residential Construction" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
             <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/80">
               Est. 2008 • License #A+ BBB
             </p>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building Houston's<br />
            Finest Projects
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Premier construction firm specializing in residential remodeling, commercial builds, and asphalt paving solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-sm font-bold tracking-widest uppercase bg-white text-black hover:bg-white/90 rounded-none border-0">
                Get Your Estimate
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="h-14 px-8 text-sm font-bold tracking-widest uppercase bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white hover:text-white rounded-none">
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce duration-1000">
         <div className="w-[1px] h-12 bg-white/20"></div>
      </div>
    </section>
  );
}
