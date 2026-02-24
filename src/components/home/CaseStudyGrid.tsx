"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CaseStudyCard from "./CaseStudyCard";
import { projects } from "@/data/projects";

export default function CaseStudyGrid() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">Selected Work</p>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Case Studies
          </h2>
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
