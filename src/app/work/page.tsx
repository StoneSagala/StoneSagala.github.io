import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import CaseStudyCard from "@/components/home/CaseStudyCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies showcasing product design, design systems, and UX work by Stone Sagala.",
};

export default function WorkPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <ScrollReveal>
          <p className="mb-4 font-mono text-sm text-accent">Selected Work</p>
        </ScrollReveal>
        <AnimatedText
          text="Projects that moved the needle."
          className="max-w-2xl text-4xl font-semibold text-text-primary md:text-5xl"
          as="h1"
        />
        <ScrollReveal delay={0.3}>
          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            Each project represents a unique challenge where design thinking met
            real business impact.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <CaseStudyCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
