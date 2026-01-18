import { useState } from "react";
import { Button } from "@/components/ui/button";
import resImage from "@assets/generated_images/residential_renovation.png";
import comImage from "@assets/generated_images/commercial_building_site.png";
import specImage from "@assets/generated_images/construction_hero_background.png";

const projects = [
  {
    id: 1,
    title: "Luxury Kitchen Remodel",
    category: "Residential",
    image: resImage,
    description: "Complete overhaul of a 1980s kitchen into a modern chef's workspace."
  },
  {
    id: 2,
    title: "Corporate Office Complex",
    category: "Commercial",
    image: comImage,
    description: "New build steel structure for a tech company headquarters."
  },
  {
    id: 3,
    title: "Community RV Park",
    category: "Specialized",
    image: specImage, // placeholder
    description: "Full site development including utilities, pads, and roads."
  },
  {
    id: 4,
    title: "Shopping Center Parking",
    category: "Specialized",
    image: comImage, // placeholder
    description: "Resurfacing and restriping for a major retail center."
  },
  {
    id: 5,
    title: "Master Bathroom Suite",
    category: "Residential",
    image: resImage, // placeholder
    description: "Spa-like bathroom addition with custom tiling."
  },
  {
    id: 6,
    title: "Warehouse Expansion",
    category: "Commercial",
    image: comImage, // placeholder
    description: "Adding 5000 sq ft of storage space to an existing facility."
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-heading text-center mb-6">Our Portfolio</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of our commitment to excellence across residential and commercial projects.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Residential", "Commercial", "Specialized"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-white h-80">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">{project.category}</span>
                <h3 className="text-xl font-bold font-heading mb-2">{project.title}</h3>
                <p className="text-sm text-slate-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
