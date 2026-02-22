"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <Container>
        <div className="max-w-3xl">
          <AnimatedText
            text="Turning complex products into intuitive digital experiences."
            className="font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl md:leading-tight"
            delay={0.2}
          />

          <ScrollReveal delay={0.5}>
            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-text-secondary">
                Product Designer with 5 years of experience across healthcare,
                cybersecurity, and enterprise IT software.
              </p>
              <p className="mt-3 text-base text-text-primary">
                UX Designer @{" "}
                <a
                  href="https://www.pdq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  PDQ.com
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#work">View Work</Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-text-tertiary">Scroll</span>
          <div className="h-8 w-px bg-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
