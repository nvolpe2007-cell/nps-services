import { Hero } from "@/components/home/Hero";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function Home() {
  usePageSeo({
    title: "N&P SERVICES | Houston's Parking Lot & Construction Experts",
    description:
      "League City's trusted construction company with 17+ years experience. Asphalt, parking lots, concrete, commercial & residential construction. A+ BBB rated.",
    path: "/",
  });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProjectShowcase />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
