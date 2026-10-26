import { Hero } from "@/components/home/Hero";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function Home() {
  usePageSeo({
    title: "Commercial Concrete & Parking Lots in Houston | N&P Services",
    description:
      "Commercial concrete slabs, parking lots, sidewalks, concrete repair, striping and site work across Greater Houston. 17+ years, A+ BBB rated. Free bids.",
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
