"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const words = [
  {
    text: "intuitive",
    color: "#4F7BF7",
    enter: { y: "-110%", x: 0 },  // enters from top
    exit:  { x: "110%",  y: 0 },  // scalable pushes from left → exits right
  },
  {
    text: "scalable",
    color: "#8B5CF6",
    enter: { x: "-110%", y: 0 },  // enters from left
    exit:  { y: "-110%", x: 0 },  // accessible pushes from bottom → exits top
  },
  {
    text: "accessible",
    color: "#10B981",
    enter: { y: "110%",  x: 0 },  // enters from bottom
    exit:  { x: "-110%", y: 0 },  // impactful pushes from right → exits left
  },
  {
    text: "impactful",
    color: "#F59E0B",
    enter: { x: "110%",  y: 0 },  // enters from right
    exit:  { y: "110%",  x: 0 },  // intuitive pushes from top → exits bottom
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const { color } = words[index];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">

      {/* Radial gradient — left, crossfades with each word */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: `radial-gradient(ellipse 80% 70% at 0% 50%, ${words[index].color}2e 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      </AnimatePresence>


      <Container>
        <div className="max-w-3xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl md:leading-tight"
            aria-label="Let's turn complex products into intuitive, scalable, accessible, and impactful digital experiences."
          >
            <span className="block">
              Let's turn complex products into{" "}
              <span
                className="relative inline-grid"
                style={{ verticalAlign: "baseline", overflow: "hidden" }}
                aria-hidden="true"
              >
                {/* Width lock */}
                <span
                  className="invisible col-start-1 row-start-1 select-none pointer-events-none"
                  aria-hidden
                >
                  accessible
                </span>

                <AnimatePresence mode="sync" initial={false}>
                  <motion.span
                    key={index}
                    className="col-start-1 row-start-1"
                    initial={words[index].enter}
                    animate={{ y: 0, x: 0 }}
                    exit={words[index].exit}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ color: words[index].color }}
                  >
                    {words[index].text}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="block">digital experiences.</span>
          </motion.h1>

          <ScrollReveal delay={0.5}>
            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-text-secondary">
                Product designer with 5 years of experience across healthcare, enterprise IT, cybersecurity, and motorsports. Confusion is a design problem ... I solve design problems.
              </p>
              <p className="mt-3 text-base text-text-primary">
                UX Designer @{" "}
                <a
                  href="https://www.pdq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary"
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
