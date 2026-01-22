import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Home, Building2, Truck, PaintBucket, Trees, Car, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useSimpleAnimations, useMobile } from "@/hooks/useMobile";

const services = [
  {
    id: "01",
    icon: Car,
    title: "Asphalt & Parking Lots",
    description: "Houston's parking lot and asphalt experts. We handle everything from new installations to repairs and striping.",
    items: ["New Installations", "Resurfacing", "Striping & Marking", "Pothole Repair"],
    portfolioFilter: "Commercial",
  },
  {
    id: "02",
    icon: Building2,
    title: "Commercial Projects",
    description: "Full-service commercial construction from ground-up builds to tenant improvements and facility upgrades.",
    items: ["Office Buildings", "Retail Spaces", "Multi-Family Housing", "Industrial Facilities"],
    portfolioFilter: "Commercial",
  },
  {
    id: "03",
    icon: PaintBucket,
    title: "Concrete Services",
    description: "Expert concrete work for driveways, sidewalks, foundations, and decorative applications.",
    items: ["Driveways", "Sidewalks", "Foundations", "Decorative Concrete"],
    portfolioFilter: "Commercial",
  },
  {
    id: "04",
    icon: Trees,
    title: "Site Work",
    description: "Complete site preparation including land clearing, grading, drainage, and utility installation.",
    items: ["Land Clearing", "Grading", "Drainage Systems", "Utility Installation"],
    portfolioFilter: "Commercial",
  },
  {
    id: "05",
    icon: Truck,
    title: "Specialized Services",
    description: "RV park development, detention ponds, demolition, and other specialized construction needs.",
    items: ["RV Parks", "Detention Ponds", "Demolition", "Excavation"],
    portfolioFilter: "Commercial",
  },
  {
    id: "06",
    icon: Home,
    title: "Residential Construction",
    description: "Complete home building and renovation services including kitchens, bathrooms, additions, decks, and siding.",
    items: ["New Home Builds", "Kitchen Remodels", "Bathroom Renovations", "Room Additions"],
    portfolioFilter: "Residential",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const simpleMode = useSimpleAnimations();
  const isMobile = useMobile();

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-black/40 block mb-3 md:mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
            Comprehensive<br />
            Construction Services
          </h2>
          <p className="text-base md:text-xl text-black/60 leading-relaxed">
            From residential renovations to large-scale commercial projects, we deliver quality craftsmanship across the Greater Houston area.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="border-b border-black/10 py-5 md:py-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: simpleMode ? 0 : index * 0.05 }}
            >
              {/* Mobile: Tap to expand / Desktop: Hover */}
              <div 
                className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-6 ${isMobile ? 'cursor-pointer' : 'group cursor-pointer'}`}
                onClick={() => isMobile && toggleExpand(index)}
              >
                {/* Number - Hidden on mobile */}
                <div className="hidden md:block text-5xl font-bold text-black/10 group-hover:text-black/30 transition-colors w-24 flex-shrink-0">
                  {service.id}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 md:gap-6 md:w-80 flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-black/5 md:group-hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-red-600 md:group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-black">
                      {service.title}
                    </h3>
                    {/* Description visible on mobile always */}
                    <p className="text-sm text-black/50 mt-1 md:hidden line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  {/* Mobile expand indicator */}
                  {isMobile && (
                    <ChevronDown 
                      className={`h-5 w-5 text-black/30 transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''}`} 
                    />
                  )}
                </div>

                {/* Description - Desktop only */}
                <p className="hidden md:block text-black/50 flex-1 lg:max-w-md">
                  {service.description}
                </p>

                {/* Arrow - Desktop only */}
                <Link href={`/portfolio?filter=${service.portfolioFilter}`} className="hidden md:block ml-auto">
                  <div className="w-12 h-12 border border-black/10 group-hover:border-red-600 group-hover:bg-red-600 flex items-center justify-center transition-all">
                    <ArrowRight className="h-5 w-5 text-black/30 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>

              {/* Expanded Items - Mobile tap / Desktop hover */}
              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  height: (isMobile ? expandedIndex === index : false) ? "auto" : 0,
                  opacity: (isMobile ? expandedIndex === index : false) ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="pt-4 pl-16 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-black/5 text-xs text-black/70"
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
          className="mt-10 md:mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/services">
            <button className="inline-flex items-center gap-3 bg-red-600 text-white px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-bold tracking-wider uppercase active:bg-red-700 md:hover:bg-red-700 transition-colors">
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
