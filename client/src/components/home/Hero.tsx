import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/construction_hero_background.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/90 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase shadow-lg border border-white/10">
              Reliable • Professional • Experienced
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building Your Vision with <span className="text-blue-400">Precision</span> & Integrity
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            N&P Services brings over 17 years of A+ rated expertise in residential, commercial, and specialized construction to League City and beyond.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 font-bold bg-primary hover:bg-primary/90 border-2 border-primary">
                Request a Free Quote
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-bold bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10 py-6 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between max-w-4xl text-white">
          <div className="text-center">
            <div className="text-3xl font-bold font-heading text-blue-400">17+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="w-px bg-white/20 h-12"></div>
          <div className="text-center">
            <div className="text-3xl font-bold font-heading text-blue-400">A+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">BBB Rating</div>
          </div>
          <div className="w-px bg-white/20 h-12"></div>
          <div className="text-center">
            <div className="text-3xl font-bold font-heading text-blue-400">100s</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
