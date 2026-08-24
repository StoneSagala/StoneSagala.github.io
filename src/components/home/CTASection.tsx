"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function CTASection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("stonesagala@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="mb-4 font-sans text-sm text-accent">
              Available for opportunities
            </p>
          </ScrollReveal>

          <AnimatedText
            text="Let's build something great together."
            className="font-sans text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
            as="h2"
          />

          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              I&apos;m open to freelance projects and full-time roles where I can
              make a meaningful impact on product design and design systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="outline" onClick={copyEmail} className="min-w-[120px]">
                {copied ? "Copied!" : "Copy Email"}
              </Button>
              <Button href="https://linkedin.com/in/stonesagala">
                Message on LinkedIn
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
