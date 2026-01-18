import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/aerial_residential_property.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitTextReveal } from "@/components/animations/AnimatedText";
import { MagneticButton } from "@/components/animations/ScrollReveal";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src={heroBg}
          alt="Luxury Residential Construction"
          className="w-full h-full object-cover"
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3), rgba(0,0,0,0.4))" }}
          animate={{
            background: [
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3), rgba(0,0,0,0.4))",
              "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25), rgba(0,0,0,0.35))",
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3), rgba(0,0,0,0.4))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: "110%",
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: "-10%",
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10 text-white pt-24"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-5xl">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-white/90">
                Est. 2008 • A+ BBB Rated
              </span>
            </motion.div>
          </motion.div>

          {/* Split text headline */}
          <div className="mb-8">
            <SplitTextReveal
              text="Building Houston's"
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-white"
              delay={0.4}
            />
            <SplitTextReveal
              text="Finest Projects"
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-white"
              delay={0.8}
            />
          </div>

          {/* Animated line */}
          <motion.div
            className="w-24 h-[2px] bg-gradient-to-r from-white to-transparent mb-8"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />

          {/* Description with reveal */}
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-12 max-w-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Premier construction firm specializing in residential remodeling, commercial builds, and Houston's leading asphalt & paving solutions.
          </motion.p>

          {/* Magnetic buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <MagneticButton>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-16 px-10 text-sm font-bold tracking-widest uppercase bg-white text-black hover:bg-white/90 rounded-none border-0 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Your Estimate</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-sm font-bold tracking-widest uppercase bg-transparent text-white border-2 border-white/40 hover:border-white rounded-none relative overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">View Portfolio</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
