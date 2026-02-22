import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stone Sagala for freelance projects, full-time roles, or collaboration opportunities.",
};

const contactMethods = [
  {
    label: "Email",
    value: "stonesagala@gmail.com",
    href: "mailto:stonesagala@gmail.com",
    description: "Best for project inquiries and detailed conversations.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/stonesagala",
    href: "https://linkedin.com/in/stonesagala",
    description: "Connect professionally and see my latest updates.",
  },
];

export default function ContactPage() {
  return (
    <section className="flex min-h-screen items-center pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="mb-4 font-mono text-sm text-accent">Contact</p>
          </ScrollReveal>
          <AnimatedText
            text="Let's create something meaningful."
            className="text-4xl font-semibold text-text-primary md:text-5xl"
            as="h1"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-lg text-text-secondary">
              I&apos;m open to freelance projects, full-time product design roles,
              and interesting collaborations. Let&apos;s talk about how I can help.
            </p>
          </ScrollReveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-xl gap-6">
          {contactMethods.map((method, i) => (
            <ScrollReveal key={method.label} delay={0.2 + i * 0.1}>
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group block rounded-xl border border-border bg-bg-secondary p-6 transition-colors hover:border-border-hover"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                      {method.label}
                    </p>
                    <p className="mt-1 text-lg font-medium text-text-primary group-hover:text-accent">
                      {method.value}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {method.description}
                    </p>
                  </div>
                  <span className="text-text-tertiary transition-colors group-hover:text-accent">
                    &rarr;
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mx-auto mt-16 max-w-xl text-center">
            <p className="text-text-secondary">
              Prefer a quick chat? Schedule a 15-minute call.
            </p>
            <div className="mt-4">
              <Button href="mailto:stonesagala@gmail.com" variant="outline">
                Schedule a Call
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
