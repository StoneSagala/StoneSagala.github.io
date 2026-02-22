"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">Testimonials</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            What People Say
          </h2>
        </ScrollReveal>

        <div className="mt-12 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl"
            >
              <p className="text-xl leading-relaxed text-text-primary md:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-bg-tertiary" />
                <div>
                  <p className="font-medium text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-accent"
                  : "w-2 bg-bg-elevated hover:bg-text-tertiary"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
