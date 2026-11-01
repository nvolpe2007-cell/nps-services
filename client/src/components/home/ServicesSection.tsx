import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, PaintBucket, Trees, Car, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useSimpleAnimations } from "@/hooks/useMobile";

const services = [
  {
    icon: PaintBucket,
    title: "Commercial Concrete",
    description: "Commercial slabs, sidewalks and walkways, poured and finished for daily traffic.",
    items: ["Commercial Slabs", "Sidewalks & Walkways", "Foundations", "Concrete Repair & Resurfacing"],
    color: "bg-red-600",
  },
  {
    icon: Car,
    title: "Asphalt & Parking Lots",
    description: "Houston's parking lot and asphalt experts. New lots, resurfacing, striping and repairs.",
    items: ["New Installations", "Resurfacing", "Striping & Marking", "Seal Coating"],
    color: "bg-slate-800",
  },
  {
    icon: Trees,
    title: "Site Work",
    description: "Site preparation before the pour: land clearing, grading, drainage and utilities.",
    items: ["Land Clearing", "Grading", "Drainage & Detention Ponds", "Utilities"],
    color: "bg-red-600",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Ground-up commercial builds and tenant improvements across Greater Houston.",
    items: ["Steel & Metal Buildings", "Retail Spaces", "Multi-Family", "RV Parks"],
    color: "bg-slate-800",
  },
  {
    icon: Home,
    title: "Residential",
    description: "We still take on home projects: driveways, patios, new builds and remodels.",
    items: ["Driveways", "Patios", "New Builds", "Remodels"],
    color: "bg-red-600",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const simpleMode = useSimpleAnimations();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-red-600 mb-4 px-4 py-2 bg-red-50 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Concrete and Paving for Houston Businesses
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Commercial concrete, parking lots and the site work underneath them, handled by one company with over 17 years of experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-red-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: simpleMode ? 0 : index * 0.1 }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link href="/commercial-concrete">
            <button className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 text-sm font-bold tracking-wider uppercase hover:bg-red-700 active:bg-red-800 transition-colors rounded-lg shadow-lg shadow-red-600/25 hover:shadow-red-600/40">
              View Commercial Services
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
