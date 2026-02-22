"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function CaseStudyCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border border-border bg-bg-secondary transition-colors duration-300 group-hover:border-border-hover"
      >
        {/* Thumbnail area */}
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ backgroundColor: project.color + "15" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-16 w-16 rounded-2xl opacity-30"
              style={{ backgroundColor: project.color }}
            />
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 0.4 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="mb-2 font-mono text-xs text-accent uppercase tracking-wider">
            {project.role}
          </p>
          <h3 className="text-xl font-semibold text-text-primary md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-text-secondary">{project.subtitle}</p>

          <div className="mt-4 flex items-center gap-2 text-sm text-text-tertiary">
            <span>{project.timeline}</span>
            <span className="h-1 w-1 rounded-full bg-text-tertiary" />
            <span>{project.tools.slice(0, 3).join(", ")}</span>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
            View Case Study
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              &rarr;
            </motion.span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
