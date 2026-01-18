import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useSimpleAnimations } from "@/hooks/useMobile";

const testimonials = [
  {
    id: 1,
    text: "N&P Services transformed our outdated kitchen into a modern masterpiece. The team was professional, clean, and finished ahead of schedule!",
    author: "Sarah Jenkins",
    role: "Homeowner, League City",
    rating: 5,
  },
  {
    id: 2,
    text: "We hired them for a large parking lot resurfacing project. Their attention to detail and communication was outstanding throughout.",
    author: "Robert Chen",
    role: "Property Manager, Houston",
    rating: 5,
  },
  {
    id: 3,
    text: "The best construction experience we've ever had. Reliable, honest, and delivered high-quality work on our commercial addition.",
    author: "Michael Torres",
    role: "Business Owner, Clear Lake",
    rating: 5,
  },
  {
    id: 4,
    text: "From start to finish, the N&P team exceeded our expectations. They handled our complete home renovation with expertise.",
    author: "Jennifer Adams",
    role: "Homeowner, Friendswood",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);
  const simpleMode = useSimpleAnimations();

  useEffect(() => {
    const interval = simpleMode ? 7000 : 5000;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [simpleMode]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-16 md:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Large quote background - smaller on mobile */}
      <div className="absolute top-10 md:top-20 left-4 md:left-10 opacity-5">
        <Quote className="w-32 h-32 md:w-64 md:h-64" />
      </div>

      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-black/40 block mb-3 md:mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
              What Our<br />
              Clients Say
            </h2>
            <p className="text-base md:text-xl text-black/60 leading-relaxed mb-6 md:mb-8">
              Don't just take our word for it. Here's what our satisfied customers have to say about working with N&P Services.
            </p>

            {/* BBB Badge */}
            <div className="inline-flex items-center gap-3 md:gap-4 bg-white px-4 md:px-6 py-3 md:py-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">A+</div>
              <div>
                <div className="font-bold text-black text-sm md:text-base">BBB Accredited</div>
                <div className="text-xs md:text-sm text-black/50">Better Business Bureau</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white p-6 md:p-12 shadow-xl relative">
              {/* Stars */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg md:text-2xl text-black/80 leading-relaxed mb-6 md:mb-8 font-light">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-black text-white flex items-center justify-center text-lg md:text-xl font-bold">
                      {testimonials[current].author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm md:text-base">{testimonials[current].author}</div>
                      <div className="text-xs md:text-sm text-black/50">{testimonials[current].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-black/10 active:border-black active:bg-black active:text-white md:hover:border-black md:hover:bg-black md:hover:text-white flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-black/10 active:border-black active:bg-black active:text-white md:hover:border-black md:hover:bg-black md:hover:text-white flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dots */}
              <div className="absolute -bottom-4 md:-bottom-6 left-6 md:left-10 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-black w-5 md:w-6" : "bg-black/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
