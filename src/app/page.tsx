import Hero from "@/components/home/Hero";
import CredentialsSection from "@/components/home/CredentialsSection";
import CaseStudyGrid from "@/components/home/CaseStudyGrid";
import StatementSection from "@/components/home/StatementSection";
import ToolsSection from "@/components/home/ToolsSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialsSection />
      <CaseStudyGrid />
      <StatementSection />
      <ToolsSection />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
