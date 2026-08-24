"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">

      <Container>
        <div className="max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl md:leading-tight"
          >
            I design enterprise <span className="whitespace-nowrap">software that</span>
            <br />
            <span className="whitespace-nowrap">
              <motion.span
                className="inline-block cursor-default mx-1"
                style={{ transformOrigin: "bottom center" }}
                animate={{ y: 0, rotate: 0 }}
                whileHover={reduceMotion ? {} : {
                  color: "#60A5FA",
                  y: [0, -10, 0],
                  rotate: [0, -3, 0],
                  transition: {
                    color: { duration: 0.2 },
                    y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                  },
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                ships
              </motion.span>
              ,{" "}
              <motion.span
                className="inline-block cursor-default ml-1 mr-1"
                style={{ transformOrigin: "bottom center" }}
                whileHover={reduceMotion ? {} : {
                  color: "#34D399",
                  scaleY: 0.88,
                  scaleX: 1.08,
                }}
                transition={{ type: "spring", stiffness: 700, damping: 22 }}
              >
                sticks
              </motion.span>
              , and{" "}
              <motion.span
                className="inline-block cursor-default ml-1 mr-1"
                whileHover={reduceMotion ? {} : {
                  color: "#A78BFA",
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                scales
              </motion.span>
              .
            </span>
          </motion.h1>

          <ScrollReveal delay={0.5}>
            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-text-secondary">
                A Product Designer based in Salt Lake City, currently designing B2B Enterprise IT software at PDQ.com.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="outline">
                Get in Touch
              </Button>
              <Button href="#work">View Work</Button>
            </div>
          </ScrollReveal>

        </div>
      </Container>

    </section>
  );
}
