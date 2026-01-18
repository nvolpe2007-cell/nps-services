import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/aerial_residential_property.png";
import comImage from "@assets/generated_images/commercial_building_site.png";
import specImage from "@assets/generated_images/construction_hero_background.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Play, ChevronLeft } from "lucide-react";

const slides = [
  {
    image: heroBg,
    title: "Building Excellence",
    subtitle: "Since 2008",
    description: "Houston's Premier Construction & Asphalt Experts",
  },
  {
    image: comImage,
    title: "Commercial Projects",
    subtitle: "Built to Last",
    description: "From Ground Up to Finishing Touches",
  },
  {
    image: specImage,
    title: "Quality Craftsmanship",
    subtitle: "A+ BBB Rated",
    description: "Trusted by Hundreds Across Greater Houston",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 50, damping: 20 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 50, damping: 20 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden bg-black">
      {/* Slideshow Background */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Animated grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 border-l-4 border-white">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
                  Houston's Trusted Builder
                </span>
              </div>
            </motion.div>

            {/* Title with animated underline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[0.95] tracking-tight">
                  {slides[current].title}
                </h1>
                <motion.div
                  className="h-1 bg-white mb-6"
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <p className="text-xl md:text-2xl text-white/60 font-light mb-2">
                  {slides[current].subtitle}
                </p>
                <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                  {slides[current].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 text-sm font-bold tracking-wider uppercase bg-white text-black hover:bg-white/90 rounded-none group"
                >
                  Get Free Estimate
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-sm font-bold tracking-wider uppercase bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-none group"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`relative h-1 transition-all duration-500 ${
              index === current ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === current && (
              <motion.div
                className="absolute inset-0 bg-white"
                layoutId="activeSlide"
              />
            )}
          </button>
        ))}
      </div>

      {/* Side Stats */}
      <div className="absolute right-8 md:right-12 bottom-24 z-20 hidden lg:flex flex-col gap-8">
        {[
          { value: "17+", label: "Years" },
          { value: "500+", label: "Projects" },
          { value: "A+", label: "BBB Rating" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <div className="text-3xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
