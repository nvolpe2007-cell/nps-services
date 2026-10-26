import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { HardHat, Building2, Landmark, Store, ChevronRight } from "lucide-react";
import { useSimpleAnimations } from "@/hooks/useMobile";

// Who the commercial work is for. Copy describes what N&P offers each group,
// never past clients or contracts the owner hasn't confirmed.
export const clientGroups = [
  {
    icon: HardHat,
    title: "Developers & General Contractors",
    text: "Site work, slabs, parking and sidewalks for commercial and multi-family projects. Send the plans and we'll send back a bid.",
  },
  {
    icon: Building2,
    title: "Property & Facility Managers",
    text: "Parking lot repairs, resurfacing, seal coating and restriping across the properties you manage, on a schedule we set with you.",
  },
  {
    icon: Landmark,
    title: "Cities, Counties & Schools",
    text: "Sidewalks, parking areas, concrete repair, detention ponds and site work for public projects. We'll bid to your plans and specs.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    text: "Stores, restaurants, offices, churches and clinics: a lot your customers notice for the right reasons, and walks that are safe to use.",
  },
];

export function WhoWeServe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const simpleMode = useSimpleAnimations();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-3xl mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-red-600 mb-4">
            Who We Work With
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Concrete for the people who run Houston's properties
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you're building it, managing it, or answering to a city council for it,
            you get a written bid, a plan for the work, and one company handling it from
            site work to striping.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="flex flex-col bg-slate-50 p-8 border-t-4 border-red-600"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: simpleMode ? 0 : index * 0.1 }}
            >
              <group.icon className="h-9 w-9 text-red-600 mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{group.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{group.text}</p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-red-600 hover:text-red-700"
              >
                Request a bid
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
