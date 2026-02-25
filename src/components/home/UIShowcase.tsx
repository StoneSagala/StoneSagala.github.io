"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const showcaseItems = [
  { title: "Design System Components", color: "#4F7BF7" },
  { title: "Dashboard Interface", color: "#10B981" },
  { title: "Mobile App Screens", color: "#F59E0B" },
  { title: "Data Visualization", color: "#8B5CF6" },
  { title: "Icon Set Design", color: "#EF4444" },
  { title: "Landing Page Concept", color: "#06B6D4" },
];

export default function UIShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={containerRef}
      className="overflow-hidden border-t border-border py-24 md:py-32"
    >
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">Dribbble-worthy</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            UI Showcase
          </h2>
          <p className="mt-4 max-w-lg text-text-secondary">
            A selection of visual design work, UI explorations, and design system
            artifacts.
          </p>
        </ScrollReveal>
      </Container>

      {/* Horizontal scroll strip */}
      <motion.div style={{ x }} className="mt-12 flex gap-6 px-6">
        {showcaseItems.map((item) => (
          <div
            key={item.title}
            className="flex-shrink-0 overflow-hidden rounded-xl border border-border"
          >
            <div
              className="flex h-64 w-80 items-center justify-center md:h-80 md:w-[420px]"
              style={{ backgroundColor: item.color + "12" }}
            >
              <div className="text-center">
                <div
                  className="mx-auto mb-4 h-12 w-12 rounded-xl opacity-40"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-sm text-text-secondary">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
