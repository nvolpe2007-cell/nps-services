import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import resImage from "@assets/generated_images/residential_renovation.png";
import comImage from "@assets/generated_images/commercial_building_site.png";
import specImage from "@assets/generated_images/construction_hero_background.png";

const projects = [
  {
    id: 1,
    title: "Modern Home Renovation",
    category: "Residential",
    location: "League City, TX",
    image: resImage,
  },
  {
    id: 2,
    title: "Commercial Complex",
    category: "Commercial",
    location: "Houston, TX",
    image: comImage,
  },
  {
    id: 3,
    title: "Parking Lot Installation",
    category: "Asphalt & Paving",
    location: "Clear Lake, TX",
    image: specImage,
  },
];

export function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-neutral-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-black/40 block mb-4">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Our Latest<br />
              <span className="text-neutral-400">Work</span>
            </h2>
          </div>
          <Link href="/portfolio">
            <motion.div
              className="mt-8 md:mt-0 inline-flex items-center gap-2 text-black font-bold hover:gap-4 transition-all group"
              whileHover={{ x: 5 }}
            >
              View All Projects
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center group-hover:bg-black/80 transition-colors">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Projects Grid - Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Featured Project */}
          <motion.div
            className="lg:row-span-2 relative group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] lg:h-full overflow-hidden bg-black">
              <motion.img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm px-3 py-1 inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="text-xs font-bold tracking-wider uppercase text-white">
                    {projects[0].category}
                  </span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">
                  {projects[0].title}
                </h3>
                <p className="text-white/60 text-sm">{projects[0].location}</p>
              </div>

              {/* Hover Arrow */}
              <motion.div
                className="absolute top-6 right-6 w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="h-5 w-5 text-black" />
              </motion.div>
            </div>
          </motion.div>

          {/* Smaller Projects */}
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-bold tracking-wider uppercase text-white/60 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowUpRight className="h-4 w-4 text-black" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
