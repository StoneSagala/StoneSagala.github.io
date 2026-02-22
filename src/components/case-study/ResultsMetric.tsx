"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Result {
  label: string;
  value: string;
  description: string;
}

function MetricCard({ result, index }: { result: Result; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-bg-secondary p-6 text-center"
    >
      <p className="text-4xl font-semibold text-accent md:text-5xl">
        {result.value}
      </p>
      <p className="mt-2 font-medium text-text-primary">{result.label}</p>
      <p className="mt-1 text-sm text-text-secondary">{result.description}</p>
    </motion.div>
  );
}

export default function ResultsSection({ results }: { results: Result[] }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">Results</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            Impact & Outcomes
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {results.map((result, i) => (
            <MetricCard key={result.label} result={result} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
