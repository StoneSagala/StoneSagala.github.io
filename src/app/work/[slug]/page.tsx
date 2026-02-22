import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ChallengeSection from "@/components/case-study/ChallengeSection";
import ProcessSection from "@/components/case-study/ProcessSection";
import ResultsSection from "@/components/case-study/ResultsMetric";
import NextProject from "@/components/case-study/NextProject";

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

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article>
      <CaseStudyHero project={project} />
      <ChallengeSection
        challenge={project.challenge}
        solution={project.solution}
      />
      <ProcessSection sections={project.sections} />
      <ResultsSection results={project.results} />
      <NextProject project={nextProject} />
    </article>
  );
}
