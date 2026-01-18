import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Home, Building2, Truck, PaintBucket, Trees, Car, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "01",
    icon: Home,
    title: "Residential Construction",
    description: "Complete home building and renovation services including kitchens, bathrooms, additions, decks, and siding.",
    items: ["New Home Builds", "Kitchen Remodels", "Bathroom Renovations", "Room Additions"],
  },
  {
    id: "02",
    icon: Building2,
    title: "Commercial Projects",
    description: "Full-service commercial construction from ground-up builds to tenant improvements and facility upgrades.",
    items: ["Office Buildings", "Retail Spaces", "Multi-Family Housing", "Industrial Facilities"],
  },
  {
    id: "03",
    icon: Car,
    title: "Asphalt & Parking Lots",
    description: "Houston's parking lot and asphalt experts. We handle everything from new installations to repairs and striping.",
    items: ["New Installations", "Resurfacing", "Striping & Marking", "Pothole Repair"],
  },
  {
    id: "04",
    icon: PaintBucket,
    title: "Concrete Services",
    description: "Expert concrete work for driveways, sidewalks, foundations, and decorative applications.",
    items: ["Driveways", "Sidewalks", "Foundations", "Decorative Concrete"],
  },
  {
    id: "05",
    icon: Trees,
    title: "Site Work",
    description: "Complete site preparation including land clearing, grading, drainage, and utility installation.",
    items: ["Land Clearing", "Grading", "Drainage Systems", "Utility Installation"],
  },
  {
    id: "06",
    icon: Truck,
    title: "Specialized Services",
    description: "RV park development, detention ponds, demolition, and other specialized construction needs.",
    items: ["RV Parks", "Detention Ponds", "Demolition", "Excavation"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-black/40 block mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Comprehensive<br />
            Construction Services
          </h2>
          <p className="text-xl text-black/60 leading-relaxed">
            From residential renovations to large-scale commercial projects, we deliver quality craftsmanship across the Greater Houston area.
          </p>
        </motion.div>

        {/* Services List - Editorial Style */}
        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="border-b border-black/10 py-8 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Number */}
                <div className="text-5xl font-bold text-black/10 group-hover:text-black/30 transition-colors w-24 flex-shrink-0">
                  {service.id}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-6 lg:w-80 flex-shrink-0">
                  <motion.div
                    className="w-14 h-14 bg-black/5 group-hover:bg-black flex items-center justify-center transition-colors duration-300"
                    animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="h-6 w-6 text-black/60 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-black group-hover:translate-x-2 transition-transform">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-black/50 flex-1 lg:max-w-md">
                  {service.description}
                </p>

                {/* Arrow */}
                <motion.div
                  className="lg:ml-auto"
                  animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                >
                  <div className="w-12 h-12 border border-black/10 group-hover:border-black group-hover:bg-black flex items-center justify-center transition-all">
                    <ArrowRight className="h-5 w-5 text-black/30 group-hover:text-white transition-colors" />
                  </div>
                </motion.div>
              </div>

              {/* Expanded Items */}
              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  height: hoveredIndex === index ? "auto" : 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="pt-6 pl-24 lg:pl-32 flex flex-wrap gap-3">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-black/5 text-sm text-black/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/services">
            <motion.button
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-sm font-bold tracking-wider uppercase hover:bg-black/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
