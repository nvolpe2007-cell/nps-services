import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSimpleAnimations } from "@/hooks/useMobile";
import { trackCall } from "@/lib/tracking";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const simpleMode = useSimpleAnimations();

  return (
    <section ref={ref} className="py-16 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Animated background lines - disabled on mobile for performance */}
      {!simpleMode && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"
              style={{ top: `${25 + i * 20}%` }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/40 block mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Ready to Start?
          </motion.span>

          <motion.h2
            className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Let's Build<br />
            <span className="text-red-500">
              Something Great
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-xl text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-12 text-sm md:text-base font-bold tracking-wider uppercase bg-red-600 text-white active:bg-red-700 md:hover:bg-red-700 rounded-none"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <a href="tel:832-226-4018" onClick={() => trackCall("cta")} className="flex items-center gap-2 md:gap-3 text-white/70 active:text-white md:hover:text-white transition-colors py-3">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-base md:text-lg font-semibold">832-226-4018</span>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 md:mt-16 pt-8 md:pt-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-left sm:text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div>
              <div className="text-xs md:text-sm text-white/40 uppercase tracking-wider mb-1 md:mb-2">Location</div>
              <div className="text-sm md:text-base text-white/80">League City, Texas</div>
            </div>
            <div>
              <div className="text-xs md:text-sm text-white/40 uppercase tracking-wider mb-1 md:mb-2">Email</div>
              <a href="mailto:NinoFarias@nandpservices.com" className="text-sm md:text-base text-white/80 active:text-white md:hover:text-white transition-colors break-all">
                NinoFarias@nandpservices.com
              </a>
            </div>
            <div>
              <div className="text-xs md:text-sm text-white/40 uppercase tracking-wider mb-1 md:mb-2">Hours</div>
              <div className="text-sm md:text-base text-white/80">Mon-Sat: 7am - 6pm</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
