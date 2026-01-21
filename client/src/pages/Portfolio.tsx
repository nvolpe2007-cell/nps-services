import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import outdoorKitchen1 from "@assets/portfolio/outdoor_kitchen_1.jpeg";
import outdoorKitchen2 from "@assets/portfolio/outdoor_kitchen_2.jpeg";
import outdoorKitchen3 from "@assets/portfolio/outdoor_kitchen_3.jpeg";
import outdoorKitchen4 from "@assets/portfolio/outdoor_kitchen_4.jpeg";
import outdoorKitchenConstruction from "@assets/portfolio/outdoor_kitchen_construction.jpeg";
import drivewayFinished from "@assets/portfolio/driveway_finished.jpeg";
import drivewayPrep from "@assets/portfolio/driveway_prep.jpeg";
import commercialSlab from "@assets/portfolio/commercial_slab.jpeg";

const projects = [
  {
    id: 1,
    title: "Custom Outdoor Kitchen",
    category: "Residential",
    images: [outdoorKitchen1, outdoorKitchen2, outdoorKitchen3, outdoorKitchen4, outdoorKitchenConstruction],
    description: "Complete outdoor kitchen with stone veneer, granite countertops, Primo ceramic grill, Lynx power burner, TV mount, bar seating, and LED lighting."
  },
  {
    id: 2,
    title: "Residential Driveway",
    category: "Residential",
    images: [drivewayFinished, drivewayPrep],
    description: "Curved concrete driveway with smooth finish, reinforced rebar grid, and professional forming."
  },
  {
    id: 3,
    title: "Commercial Foundation Slab",
    category: "Commercial",
    images: [commercialSlab],
    description: "Large commercial concrete slab with plumbing stubs for new building construction."
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = project.images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white h-80">
      <img 
        src={project.images[currentIndex]} 
        alt={`${project.title} - Image ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {hasMultiple && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white pointer-events-none">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">{project.category}</span>
        <h3 className="text-xl font-bold font-heading mb-2">{project.title}</h3>
        <p className="text-sm text-slate-200">{project.description}</p>
        {hasMultiple && (
          <span className="text-xs text-slate-300 mt-2">{currentIndex + 1} of {project.images.length} photos</span>
        )}
      </div>
    </div>
  );
}

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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Residential", "Commercial"].map((cat) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
