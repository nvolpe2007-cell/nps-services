import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useSimpleAnimations } from "@/hooks/useMobile";

const stats = [
  { value: 17, suffix: "+", label: "Years of Excellence", description: "Building trust since 2008" },
  { value: 500, suffix: "+", label: "Projects Completed", description: "Residential & commercial" },
  { value: 100, suffix: "%", label: "Client Satisfaction", description: "Quality guaranteed" },
  { value: 24, suffix: "/7", label: "Emergency Service", description: "Always available" },
];

function AnimatedNumber({ value, suffix, simple }: { value: number; suffix: string; simple: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    if (simple) {
      setCount(value);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, simple]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const simpleMode = useSimpleAnimations();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Background Pattern - simplified */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Animated gradient orb - disabled on mobile */}
      {!simpleMode && (
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, 25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: simpleMode ? 0 : index * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} simple={simpleMode} />
              </div>
              <div className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-white/40 hidden sm:block">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
