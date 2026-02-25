"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skills } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  book: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  ooux: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="8" height="5" rx="1" />
      <rect x="14" y="2" width="8" height="5" rx="1" />
      <rect x="8" y="16" width="8" height="5" rx="1" />
      <line x1="6" y1="7" x2="12" y2="16" />
      <line x1="18" y1="7" x2="12" y2="16" />
    </svg>
  ),
  tree: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M12 8H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-7z" />
      <path d="M5 13v3a2 2 0 0 0 2 2h2" />
      <path d="M19 13v3a2 2 0 0 1-2 2h-2" />
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
      <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M9 17c1 1 5 1 6 0" />
    </svg>
  ),
};

export default function SkillsSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">More Than Just Figma</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            Core Strengths
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-bg-secondary p-6 transition-colors hover:border-border-hover">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: skill.color + "20", color: skill.color }}
                >
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
