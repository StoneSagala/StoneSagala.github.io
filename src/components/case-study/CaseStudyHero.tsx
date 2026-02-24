"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import type { Project } from "@/data/projects";

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-mono text-sm text-accent">{project.role}</p>
          <h1 className="text-4xl font-semibold text-text-primary md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-secondary">
            {project.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3"
        >
          <div>
            <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
              Timeline
            </p>
            <p className="mt-1 text-text-primary">{project.timeline}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
              Role
            </p>
            <p className="mt-1 text-text-primary">{project.role}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
              Team
            </p>
            <p className="mt-1 text-text-primary">{project.team}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
