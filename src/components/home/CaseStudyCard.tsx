"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function CaseStudyCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border border-border bg-bg-secondary transition-colors duration-300 group-hover:border-border-hover"
      >
        {/* Thumbnail */}
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ backgroundColor: project.color + "12" }}
        >
          {/* Placeholder — replace with next/image when screenshots are ready */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 opacity-20">
              <div
                className="h-16 w-16 rounded-2xl"
                style={{ backgroundColor: project.color }}
              />
              <div className="h-2.5 w-28 rounded-full" style={{ backgroundColor: project.color }} />
              <div className="h-2.5 w-20 rounded-full" style={{ backgroundColor: project.color }} />
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <p
            className="mb-2 font-mono text-xs font-medium uppercase tracking-widest"
            style={{ color: project.color }}
          >
            {project.company}
          </p>
          <h3 className="text-xl font-bold text-text-primary md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-text-secondary">{project.subtitle}</p>
          {/* Metrics */}
          <div className="mt-6 flex flex-wrap gap-6">
            {project.results.slice(0, 3).map((result) => (
              <div key={result.label}>
                <p className="text-lg font-bold" style={{ color: project.color }}>
                  {result.value}
                </p>
                <p className="text-xs text-text-tertiary">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
