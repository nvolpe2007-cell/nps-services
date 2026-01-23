import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import steelBuilding from "@/assets/hero/commercial_building.jpg";
import outdoorKitchen from "@assets/portfolio/outdoor_kitchen_1.jpeg";
import concretePour from "@assets/portfolio/concrete_pour_crew.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Play, ChevronLeft } from "lucide-react";
import { useSimpleAnimations } from "@/hooks/useMobile";

const slides = [
  {
    image: steelBuilding,
    title: "Building Excellence",
    subtitle: "17+ Years of Quality",
    description: "Commercial & Residential Construction in Greater Houston",
  },
  {
    image: outdoorKitchen,
    title: "Custom Outdoor Living",
    subtitle: "Residential Experts",
    description: "Beautiful Outdoor Kitchens, Patios & Entertainment Spaces",
  },
  {
    image: concretePour,
    title: "Concrete & Site Work",
    subtitle: "Houston's Parking Lot Experts",
    description: "Foundations, Driveways, Slabs & Commercial Paving",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const simpleMode = useSimpleAnimations();

  useEffect(() => {
    const interval = simpleMode ? 8000 : 6000;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [simpleMode]);

  const goTo = (index: number) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[800px] overflow-hidden bg-black">
      {/* Slideshow Background - Simple crossfade on mobile */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: simpleMode ? 0.5 : 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Grid overlay - hidden on mobile for performance */}
      {!simpleMode && (
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }} />
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 md:mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 border-l-4 border-red-500">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-white">
                  Houston's Trusted Builder
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-3 md:mb-4 leading-[0.95] tracking-tight">
                  {slides[current].title}
                </h1>
                <div className="h-1 bg-red-500 mb-4 md:mb-6 w-20 md:w-[120px]" />
                <p className="text-lg md:text-2xl text-white/60 font-light mb-1 md:mb-2">
                  {slides[current].subtitle}
                </p>
                <p className="text-base md:text-xl text-white/80 max-w-xl leading-relaxed">
                  {slides[current].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-xs md:text-sm font-bold tracking-wider uppercase bg-red-600 text-white hover:bg-red-700 rounded-none"
                >
                  Get Free Estimate
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-xs md:text-sm font-bold tracking-wider uppercase bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-none"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Positioned at bottom left/right corners */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 bottom-20 md:bottom-24 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm active:bg-white/30 md:hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 bottom-20 md:bottom-24 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm active:bg-white/30 md:hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1.5 md:h-1 transition-all duration-300 ${
              index === current ? "w-8 md:w-12 bg-white" : "w-4 md:w-6 bg-white/30 active:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

          </section>
  );
}
