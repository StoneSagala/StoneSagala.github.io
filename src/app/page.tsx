import Hero from "@/components/home/Hero";
import CaseStudyGrid from "@/components/home/CaseStudyGrid";
import ToolsSection from "@/components/home/ToolsSection";
import SkillsSection from "@/components/home/SkillsSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import UIShowcase from "@/components/home/UIShowcase";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudyGrid />
      <ToolsSection />
      <SkillsSection />
      <TestimonialSlider />
      <UIShowcase />
      <CTASection />
    </>
  );
}
