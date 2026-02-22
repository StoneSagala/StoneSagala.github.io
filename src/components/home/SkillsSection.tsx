"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skills } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  pointer: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  ),
  play: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function SkillsSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">Capabilities</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            What I Do
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-bg-secondary p-6 transition-colors hover:border-border-hover">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                  {iconMap[skill.icon]}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {skill.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
