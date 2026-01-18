import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-black text-white relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
            style={{ top: `${20 + i * 15}%` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Ready to Start?
          </motion.span>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Let's Build<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Something Great
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="h-16 px-12 text-base font-bold tracking-wider uppercase bg-white text-black hover:bg-white/90 rounded-none group"
              >
                Get Your Free Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <a href="tel:832-704-5525" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">832-704-5525</span>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-16 pt-16 border-t border-white/10 grid sm:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div>
              <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Location</div>
              <div className="text-white/80">League City, Texas</div>
            </div>
            <div>
              <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Email</div>
              <a href="mailto:ninofarias@nandpservices.com" className="text-white/80 hover:text-white transition-colors">
                ninofarias@nandpservices.com
              </a>
            </div>
            <div>
              <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Hours</div>
              <div className="text-white/80">Mon-Sat: 7am - 6pm</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
