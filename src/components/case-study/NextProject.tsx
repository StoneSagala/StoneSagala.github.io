"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project } from "@/data/projects";

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <p className="mb-4 font-mono text-sm text-text-tertiary">
            Next Project
          </p>
          <Link href={`/work/${project.slug}`} className="group block">
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl font-semibold text-text-primary transition-colors group-hover:text-accent md:text-4xl">
                {project.title}
              </h2>
              <p className="mt-2 text-text-secondary">{project.subtitle}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                View Case Study &rarr;
              </span>
            </motion.div>
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
