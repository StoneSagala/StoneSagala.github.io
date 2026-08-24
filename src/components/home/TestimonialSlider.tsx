"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(testimonials.length).fill(null)
  );

  useEffect(() => {
    const intersecting = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            intersecting.add(index);
          } else {
            intersecting.delete(index);
          }
        });

        if (intersecting.size > 0) {
          const sorted = [...intersecting].sort((a, b) => a - b);
          setFocusedIndex(sorted[Math.floor(sorted.length / 2)]);
        } else {
          setFocusedIndex(null);
        }
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: 0 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-sans text-sm text-accent">They Said It, Not Me</p>
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            Testimonials
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-10">
          {testimonials.map((t, i) => {
            const isRight = i % 2 === 1;
            const isFocused = focusedIndex === null || focusedIndex === i;
            return (
              <motion.div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                data-index={i}
                animate={{ opacity: isFocused ? 1 : 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex flex-col ${isRight ? "items-end" : "items-start"}`}
              >
                <figure className="w-full max-w-[80%] md:max-w-[65%]">
                  <blockquote className="rounded-xl border border-border bg-bg-secondary p-6">
                    <p className="text-base leading-relaxed text-text-primary">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className={`mt-3 flex items-center gap-3 ${isRight ? "flex-row-reverse" : ""}`}>
                    {t.photo ? (
                      <Image
                        src={t.photo}
                        alt={t.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-9 w-9 shrink-0 rounded-full bg-bg-elevated" />
                    )}
                    <div className={isRight ? "text-right" : ""}>
                      <p className="font-sans text-sm font-medium text-text-primary">{t.name}</p>
                      <p className="font-sans text-xs text-text-secondary">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
