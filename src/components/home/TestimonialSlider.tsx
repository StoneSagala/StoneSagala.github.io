"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const advance = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
    setResetKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
    setResetKey((k) => k + 1);
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setResetKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || paused) return;

    const timer = setInterval(advance, 10000);
    return () => clearInterval(timer);
  }, [paused, resetKey, advance]);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">They Said It, Not Me</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            Testimonials
          </h2>
        </ScrollReveal>

        {/* Grid-stack: all testimonials occupy the same cell so the tallest sets the height */}
        <div className="mt-12 grid">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              animate={{ opacity: i === current ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              aria-hidden={i !== current}
              className="col-start-1 row-start-1 max-w-2xl"
              style={{ pointerEvents: i === current ? "auto" : "none" }}
            >
              <p className="text-xl leading-relaxed text-text-primary md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-bg-tertiary" />
                )}
                <div>
                  <p className="font-medium text-text-primary">{t.name}</p>
                  <p className="text-sm text-text-secondary">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-3">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-accent"
                    : "w-2 bg-bg-elevated hover:bg-text-tertiary"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Pause / Play */}
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play autoplay" : "Pause autoplay"}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
          >
            {paused ? (
              /* Play icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M4 2.5l7 4.5-7 4.5V2.5z" fill="currentColor" />
              </svg>
            ) : (
              /* Pause icon */
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="3" y="2.5" width="2.5" height="9" rx="1" fill="currentColor" />
                <rect x="8.5" y="2.5" width="2.5" height="9" rx="1" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
}
