import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Stone Sagala — Product & UX Designer specializing in design systems and enterprise SaaS.",
};

const experience = [
  {
    role: "Product Designer",
    company: "PDQ",
    period: "2024 — Present",
    description:
      "Leading design system development and enterprise SaaS product design for IT management solutions.",
  },
  {
    role: "Lead Product Designer",
    company: "KLAS Research",
    period: "2022 — 2024",
    description:
      "Built and maintained a comprehensive design system serving multiple product teams. Led redesign of core survey platform using OOUX methodology.",
  },
  {
    role: "UX Designer",
    company: "University of Missouri",
    period: "2021 — 2022",
    description:
      "Designed student success tracking tools and data visualization dashboards for academic advisors.",
  },
];

const certifications = [
  "OOUX Certified Strategist",
  "Google UX Design Professional Certificate",
];

export default function AboutPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        {/* Intro */}
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 font-mono text-sm text-accent">About Me</p>
          </ScrollReveal>
          <AnimatedText
            text="I design systems that empower teams and delight users."
            className="text-4xl font-semibold text-text-primary md:text-5xl"
            as="h1"
          />
          <ScrollReveal delay={0.3}>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                I&apos;m Stone Sagala, a Product & UX Designer based in Salt Lake
                City, UT. I specialize in design systems, enterprise SaaS, and
                creating user-centered experiences that bridge the gap between
                complex business requirements and intuitive interfaces.
              </p>
              <p>
                My approach combines systems thinking with a deep empathy for
                users. I believe the best products come from understanding the
                objects and relationships that define a domain, then designing
                interfaces that make those relationships clear and actionable.
              </p>
              <p>
                When I&apos;m not designing, you can find me exploring Utah&apos;s
                mountains, experimenting with front-end development, or
                mentoring aspiring designers.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Experience */}
        <div className="mt-24">
          <ScrollReveal>
            <p className="mb-2 font-mono text-sm text-accent">Experience</p>
            <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
              Where I&apos;ve Worked
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-10">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.1}>
                <div className="grid gap-4 border-l-2 border-border pl-6 md:grid-cols-[200px_1fr]">
                  <p className="font-mono text-sm text-text-tertiary">
                    {exp.period}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-accent">{exp.company}</p>
                    <p className="mt-2 text-text-secondary">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <ScrollReveal>
            <p className="mb-2 font-mono text-sm text-accent">Credentials</p>
            <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
              Certifications
            </h2>
          </ScrollReveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.08}>
                <div className="rounded-full border border-border bg-bg-secondary px-4 py-2 text-sm text-text-secondary">
                  {cert}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-24 rounded-2xl border border-border bg-bg-secondary p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-text-primary md:text-3xl">
              Want to work together?
            </h2>
            <p className="mt-4 max-w-lg text-text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact">Get in Touch</Button>
              <Button
                href="https://linkedin.com/in/stonesagala"
                variant="outline"
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
