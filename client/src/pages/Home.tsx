import { Hero } from "@/components/home/Hero";
import { Home as HomeIcon, Building2, Truck, Star, Quote, ArrowRight } from "lucide-react";
import resImage from "@assets/generated_images/residential_renovation.png";
import comImage from "@assets/generated_images/commercial_building_site.png";
import specImage from "@assets/generated_images/construction_hero_background.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/animations/ScrollReveal";
import { CountUp } from "@/components/animations/CountUp";

function ServiceCard3D({
  title,
  description,
  icon,
  image,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  index: number;
}) {
  return (
    <StaggerItem>
      <motion.div
        className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Background image with zoom */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <motion.div
            className="mb-4 w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70 mb-4 line-clamp-2">{description}</p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="flex items-center text-white font-semibold"
          >
            <span className="group-hover:underline">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 100%, rgba(59,130,246,0.3) 0%, transparent 50%)",
          }}
        />
      </motion.div>
    </StaggerItem>
  );
}

export default function Home() {
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });
  const statsX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Hero />

      {/* Stats Ticker */}
      <section ref={statsRef} className="py-16 bg-black text-white overflow-hidden">
        <motion.div className="flex gap-20 whitespace-nowrap" style={{ x: statsX }}>
          {[...Array(3)].map((_, repeat) => (
            <div key={repeat} className="flex gap-20">
              <div className="flex items-center gap-4">
                <CountUp end={17} suffix="+" className="text-5xl font-bold text-blue-400" />
                <span className="text-lg text-white/60 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-blue-400">A+</span>
                <span className="text-lg text-white/60 uppercase tracking-wider">BBB Rating</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex items-center gap-4">
                <CountUp end={500} suffix="+" className="text-5xl font-bold text-blue-400" />
                <span className="text-lg text-white/60 uppercase tracking-wider">Projects Done</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex items-center gap-4">
                <CountUp end={100} suffix="%" className="text-5xl font-bold text-blue-400" />
                <span className="text-lg text-white/60 uppercase tracking-wider">Satisfaction</span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <ScrollReveal direction="left" className="lg:w-1/2">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <ParallaxImage src={resImage} alt="Quality Construction" className="w-full h-full" />
                </div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-black text-white p-8 rounded-2xl shadow-2xl"
                  initial={{ rotate: -5 }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <p className="text-3xl font-bold mb-1">17+</p>
                  <p className="text-sm text-white/70 uppercase tracking-wider">Years Building Trust</p>
                </motion.div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:w-1/2">
              <motion.span
                className="text-sm font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                About N&P Services
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Excellence in<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Construction
                </span>
              </h2>
              <p className="text-lg text-black/60 mb-6 leading-relaxed">
                N&P Services is a premier construction firm based in League City, Texas, proudly serving the Greater Houston area. Founded by Margarito Garcia, we deliver top-tier construction solutions.
              </p>
              <p className="text-lg text-black/60 mb-8 leading-relaxed">
                We are <strong className="text-black">Houston's parking lot and asphalt experts</strong>, specializing in residential remodeling and commercial builds with precision and integrity.
              </p>
              <Link href="/about">
                <motion.div whileHover={{ x: 10 }} className="inline-block">
                  <Button variant="outline" className="group border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-sm font-bold tracking-wider uppercase rounded-none">
                    Discover Our Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-neutral-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Expertise</h2>
            <p className="text-lg text-black/60">
              Comprehensive construction services tailored to your specific needs.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <ServiceCard3D
              title="Residential"
              description="From new builds to comprehensive remodeling including kitchens, bathrooms, additions, decks, and siding."
              icon={<HomeIcon className="h-7 w-7 text-white" />}
              image={resImage}
              index={0}
            />
            <ServiceCard3D
              title="Commercial"
              description="Expert general construction, site work, utilities, and multi-family projects with commercial-grade quality."
              icon={<Building2 className="h-7 w-7 text-white" />}
              image={comImage}
              index={1}
            />
            <ServiceCard3D
              title="Specialized"
              description="RV parks, detention ponds, land clearing, asphalt striping, concrete repair, and parking lot services."
              icon={<Truck className="h-7 w-7 text-white" />}
              image={specImage}
              index={2}
            />
          </StaggerContainer>

          <ScrollReveal className="text-center mt-16">
            <Link href="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-black text-white hover:bg-black/90 px-12 py-6 text-sm font-bold tracking-wider uppercase rounded-none">
                  Explore All Services
                </Button>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #1e40af 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #1e40af 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, #1e40af 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #1e40af 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              {
                text: "N&P Services transformed our outdated kitchen into a modern masterpiece. The team was professional, clean, and finished ahead of schedule!",
                author: "Sarah Jenkins",
                role: "Homeowner",
              },
              {
                text: "We hired them for a large parking lot resurfacing project. Their attention to detail and communication was outstanding throughout.",
                author: "Robert Chen",
                role: "Property Manager",
              },
              {
                text: "The best construction experience we've had. Reliable, honest, and high-quality work on our commercial addition.",
                author: "Michael Torres",
                role: "Business Owner",
              },
            ].map((review, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full"
                  whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * j }}
                      >
                        <Star className="h-5 w-5 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-white/20 mb-4" />
                  <p className="text-lg mb-6 text-white/80 leading-relaxed">"{review.text}"</p>
                  <div className="border-t border-white/10 pt-6">
                    <div className="font-bold text-white">{review.author}</div>
                    <div className="text-sm text-white/50">{review.role}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <ScrollReveal className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient">
              Your Project?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-black/60 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contact us today for a free consultation. Let's build something extraordinary together.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-16 px-16 text-lg font-bold tracking-wider uppercase bg-black text-white hover:bg-black/90 rounded-none shadow-2xl"
              >
                Get Your Free Quote
              </Button>
            </Link>
          </motion.div>
        </ScrollReveal>
      </section>
    </div>
  );
}
