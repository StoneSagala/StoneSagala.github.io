import Hero from "@/components/home/Hero";
import CaseStudyGrid from "@/components/home/CaseStudyGrid";
import StatementSection from "@/components/home/StatementSection";
import ToolsSection from "@/components/home/ToolsSection";
import SkillsSection from "@/components/home/SkillsSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudyGrid />
      <StatementSection />
      <ToolsSection />
      <SkillsSection />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
