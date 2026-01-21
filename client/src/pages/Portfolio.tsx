import { useState } from "react";
import { Button } from "@/components/ui/button";
import outdoorKitchen1 from "@assets/portfolio/outdoor_kitchen_1.jpeg";
import drivewayFinished from "@assets/portfolio/driveway_finished.jpeg";
import drivewayPrep from "@assets/portfolio/driveway_prep.jpeg";
import commercialSlab from "@assets/portfolio/commercial_slab.jpeg";

const projects = [
  {
    id: 1,
    title: "Custom Outdoor Kitchen",
    category: "Residential",
    image: outdoorKitchen1,
    description: "Complete outdoor kitchen with stone veneer, granite countertops, Primo ceramic grill, Lynx power burner, TV mount, bar seating, and LED lighting."
  },
  {
    id: 2,
    title: "Residential Driveway",
    category: "Concrete",
    image: drivewayFinished,
    description: "Curved concrete driveway with smooth finish for a League City residence."
  },
  {
    id: 3,
    title: "Driveway - Rebar Prep",
    category: "Concrete",
    image: drivewayPrep,
    description: "Reinforced rebar grid and wooden forms before concrete pour."
  },
  {
    id: 4,
    title: "Commercial Foundation Slab",
    category: "Commercial",
    image: commercialSlab,
    description: "Large commercial concrete slab with plumbing stubs for new building construction."
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
          {["All", "Residential", "Commercial", "Concrete"].map((cat) => (
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
