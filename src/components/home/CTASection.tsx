"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="mb-4 font-mono text-sm text-accent">
              Available for opportunities
            </p>
          </ScrollReveal>

          <AnimatedText
            text="Let's build something great together."
            className="text-3xl font-semibold text-text-primary md:text-5xl"
            as="h2"
          />

          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-lg text-text-secondary">
              I&apos;m open to freelance projects and full-time roles where I can
              make a meaningful impact on product design and design systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="mailto:stonesagala@gmail.com">Send an Email</Button>
              <Button
                href="https://linkedin.com/in/stonesagala"
                variant="outline"
              >
                LinkedIn
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
