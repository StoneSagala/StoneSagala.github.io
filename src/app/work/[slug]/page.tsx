import type React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ChallengeSection from "@/components/case-study/ChallengeSection";
import ProcessSection from "@/components/case-study/ProcessSection";
import ResultsSection from "@/components/case-study/ResultsMetric";
import TestimonialSection from "@/components/case-study/TestimonialSection";
import NextProject from "@/components/case-study/NextProject";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const completeProjects = projects.filter((p) => p.complete !== false);
  const completeIndex = completeProjects.findIndex((p) => p.slug === slug);
  const nextProject = completeProjects[(completeIndex + 1) % completeProjects.length];

  return (
    <article style={{ "--accent": project.color, "--accent-hover": project.color } as React.CSSProperties}>
      <CaseStudyHero project={project} />

      {project.summary && (
        <section className="border-t border-border py-16 md:py-24">
          <Container>
            <ScrollReveal>
              <p className="mb-2 font-mono text-sm text-accent">Overview</p>
              <p className="max-w-3xl text-xl leading-relaxed text-text-secondary">
                {project.summary}
              </p>
            </ScrollReveal>
          </Container>
        </section>
      )}

      <ChallengeSection
        challenge={project.challenge}
        solution={project.solution}
      />
      <ProcessSection sections={project.sections} label={project.processLabel} alternatingLayout={!!project.processLabel} />
      <ResultsSection results={project.results} />

      {project.testimonial && (
        <TestimonialSection
          text={project.testimonial.text}
          author={project.testimonial.author}
        />
      )}

      <NextProject project={nextProject} />
    </article>
  );
}
