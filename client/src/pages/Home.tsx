import { Hero } from "@/components/home/Hero";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
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
