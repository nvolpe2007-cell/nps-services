import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import outdoorKitchen1 from "@assets/portfolio/outdoor_kitchen_1.jpeg";
import outdoorKitchen2 from "@assets/portfolio/outdoor_kitchen_2.jpeg";
import outdoorKitchen3 from "@assets/portfolio/outdoor_kitchen_3.jpeg";
import outdoorKitchen4 from "@assets/portfolio/outdoor_kitchen_4.jpeg";
import outdoorKitchenConstruction from "@assets/portfolio/outdoor_kitchen_construction.jpeg";
import drivewayFinished from "@assets/portfolio/driveway_finished.jpeg";
import drivewayPrep from "@assets/portfolio/driveway_prep.jpeg";
import commercialSlab from "@assets/portfolio/commercial_slab.jpeg";
import bathroomShower from "@assets/portfolio/bathroom_shower.jpeg";
import kitchenRemodel1 from "@assets/portfolio/kitchen_remodel_1.jpeg";
import kitchenRemodel2 from "@assets/portfolio/kitchen_remodel_2.jpeg";
import kitchenRemodel3 from "@assets/portfolio/kitchen_remodel_3.jpeg";
import laundryRoom from "@assets/portfolio/laundry_room.jpeg";
import rvParkExcavator from "@assets/portfolio/rv_park_excavator.jpeg";
import rvParkUtilities from "@assets/portfolio/rv_park_utilities.jpeg";
import rvParkGravel from "@assets/portfolio/rv_park_gravel.jpeg";
import rvParkLiner from "@assets/portfolio/rv_park_liner.jpeg";
import concreteDemo from "@assets/portfolio/concrete_demo.jpeg";
import concreteRebar from "@assets/portfolio/concrete_rebar.jpeg";
import concretePour from "@assets/portfolio/concrete_pour.jpeg";
import concreteFinished from "@assets/portfolio/concrete_finished.jpeg";
import industrialConcrete from "@assets/portfolio/industrial_concrete.jpeg";
import steelFrame from "@assets/portfolio/steel_frame.jpeg";
import steelBuilding from "@assets/portfolio/steel_building.jpeg";
import metalInterior from "@assets/portfolio/metal_building_interior.jpeg";
import woodTruss from "@assets/portfolio/wood_truss.jpeg";
import woodFraming from "@assets/portfolio/wood_framing.jpeg";
import foundationPrep from "@assets/portfolio/foundation_prep.jpeg";
import foundationRebar from "@assets/portfolio/foundation_rebar.jpeg";
import concretePourCrew from "@assets/portfolio/concrete_pour_crew.jpeg";
import newKitchenIsland from "@assets/portfolio/new_kitchen_island.jpeg";
import newKitchenCounter from "@assets/portfolio/new_kitchen_counter.jpeg";
import newKitchenModern from "@assets/portfolio/new_kitchen_modern.jpeg";
import interiorLounge from "@assets/portfolio/interior_lounge.jpeg";
import interiorBar from "@assets/portfolio/interior_bar.jpeg";

const projects = [
  {
    id: 1,
    title: "20,000 Sq Ft Concrete Slab",
    category: "Commercial",
    images: [concreteDemo, concreteRebar, concretePour, concreteFinished, industrialConcrete],
    description: "Complete demolition and rebuild of a 20,000 sq ft commercial concrete slab, including rebar reinforcement, professional pouring, and precision finishing."
  },
  {
    id: 2,
    title: "Metal Building Construction",
    category: "Commercial",
    images: [steelFrame, steelBuilding, metalInterior],
    description: "Full metal building construction from steel frame erection to exterior paneling and interior insulation installation."
  },
  {
    id: 3,
    title: "Commercial Foundation Work",
    category: "Commercial",
    images: [foundationPrep, foundationRebar, concretePourCrew],
    description: "Large-scale foundation preparation including vapor barrier installation, rebar grid layout, and crew pouring for commercial buildings."
  },
  {
    id: 4,
    title: "Wood Framing & Trusses",
    category: "Commercial",
    images: [woodTruss, woodFraming],
    description: "Professional wood framing and truss installation for commercial and multi-family construction projects."
  },
  {
    id: 5,
    title: "RV Park Development",
    category: "Commercial",
    images: [rvParkExcavator, rvParkUtilities, rvParkGravel, rvParkLiner],
    description: "Full RV park site development including excavation, utility installation, grading, and liner placement for detention areas."
  },
  {
    id: 6,
    title: "Commercial Interior Build-Out",
    category: "Commercial",
    images: [interiorLounge, interiorBar],
    description: "Custom commercial interior construction featuring lounge areas, bar installations, and modern finishes."
  },
  {
    id: 7,
    title: "Custom Kitchen Builds",
    category: "Residential",
    images: [newKitchenIsland, newKitchenCounter, newKitchenModern, kitchenRemodel1, kitchenRemodel2, kitchenRemodel3],
    description: "Beautiful custom kitchens featuring white shaker cabinets, granite and marble countertops, subway tile backsplash, pendant lighting, and large islands."
  },
  {
    id: 8,
    title: "Custom Outdoor Kitchen",
    category: "Residential",
    images: [outdoorKitchen1, outdoorKitchen2, outdoorKitchen3, outdoorKitchen4, outdoorKitchenConstruction],
    description: "Complete outdoor kitchen with stone veneer, granite countertops, Primo ceramic grill, Lynx power burner, TV mount, bar seating, and LED lighting."
  },
  {
    id: 9,
    title: "Bathroom Remodel",
    category: "Residential",
    images: [bathroomShower, laundryRoom],
    description: "Luxury bathroom with marble tile, frameless glass shower enclosure, built-in niche, and matte black fixtures."
  },
  {
    id: 10,
    title: "Residential Driveway",
    category: "Residential",
    images: [drivewayFinished, drivewayPrep],
    description: "Curved concrete driveway with smooth finish, reinforced rebar grid, and professional forming."
  },
  {
    id: 11,
    title: "Commercial Foundation Slab",
    category: "Commercial",
    images: [commercialSlab],
    description: "Large commercial concrete slab with plumbing stubs for new building construction."
  }
];

function Lightbox({ 
  images, 
  currentIndex, 
  title,
  onClose, 
  onNext, 
  onPrev,
  onSetIndex
}: { 
  images: string[]; 
  currentIndex: number; 
  title: string;
  onClose: () => void; 
  onNext: () => void; 
  onPrev: () => void;
  onSetIndex: (idx: number) => void;
}) {
  const hasMultiple = images.length > 1;
  
  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>
      
      <div className="absolute top-4 left-4 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        {hasMultiple && (
          <span className="text-sm text-slate-300">{currentIndex + 1} of {images.length}</span>
        )}
      </div>
      
      {hasMultiple && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}
      
      <img 
        src={images[currentIndex]} 
        alt={`${title} - Image ${currentIndex + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      
      {hasMultiple && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); onSetIndex(idx); }}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpenLightbox }: { project: typeof projects[0]; onOpenLightbox: (images: string[], index: number, title: string) => void }) {
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

  const handleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenLightbox(project.images, currentIndex, project.title);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white h-80">
      <img 
        src={project.images[currentIndex]} 
        alt={`${project.title} - Image ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <button 
        onClick={handleZoom}
        className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Zoom in"
      >
        <ZoomIn className="w-5 h-5" />
      </button>
      
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
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  };

  const closeLightbox = () => setLightbox(null);

  const nextLightboxImage = () => {
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
    }
  };

  const prevLightboxImage = () => {
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
    }
  };

  const setLightboxIndex = (idx: number) => {
    if (lightbox) {
      setLightbox({ ...lightbox, index: idx });
    }
  };

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
            <ProjectCard key={project.id} project={project} onOpenLightbox={openLightbox} />
          ))}
        </div>
      </div>
      
      {lightbox && (
        <Lightbox 
          images={lightbox.images}
          currentIndex={lightbox.index}
          title={lightbox.title}
          onClose={closeLightbox}
          onNext={nextLightboxImage}
          onPrev={prevLightboxImage}
          onSetIndex={setLightboxIndex}
        />
      )}
    </div>
  );
}
