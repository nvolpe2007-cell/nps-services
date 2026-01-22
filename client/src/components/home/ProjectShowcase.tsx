import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import foundationRebar from "@assets/project_photos/foundation_rebar.jpeg";
import steelBuilding from "@assets/project_photos/steel_building.jpeg";
import kitchenIsland from "@assets/project_photos/kitchen_island.jpeg";
import { useSimpleAnimations } from "@/hooks/useMobile";

const projects = [
  {
    id: 1,
    title: "Commercial Foundation Work",
    category: "Concrete & Site Work",
    location: "Greater Houston, TX",
    image: foundationRebar,
  },
  {
    id: 2,
    title: "Metal Building Construction",
    category: "Commercial",
    location: "League City, TX",
    image: steelBuilding,
  },
  {
    id: 3,
    title: "Custom Kitchen Build",
    category: "Residential",
    location: "League City, TX",
    image: kitchenIsland,
  },
];

export function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const simpleMode = useSimpleAnimations();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-black/40 block mb-3 md:mb-4">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Our Latest<br />
              <span className="text-[#000000]">Work</span>
            </h2>
          </div>
          <Link href="/portfolio">
            <div className="mt-6 md:mt-0 inline-flex items-center gap-2 text-black font-bold active:opacity-70">
              View All Projects
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white flex items-center justify-center">
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Large Featured Project */}
          <Link href="/portfolio?filter=Commercial">
            <motion.div
              className="md:row-span-2 relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: simpleMode ? 0 : 0.1 }}
            >
              <div className="relative aspect-[4/3] md:h-full overflow-hidden bg-black">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <div className="bg-white/10 backdrop-blur-sm px-2 py-1 inline-block mb-3 md:mb-4">
                  <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-white">
                    {projects[0].category}
                  </span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                  {projects[0].title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm">{projects[0].location}</p>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-black" />
              </div>
            </div>
          </motion.div>
          </Link>

          {/* Smaller Projects */}
          {projects.slice(1).map((project, i) => (
            <Link key={project.id} href={`/portfolio?filter=${project.category}`}>
              <motion.div
                className="relative group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: simpleMode ? 0 : 0.2 + i * 0.1 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-white/60 mb-1 md:mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 text-black" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
