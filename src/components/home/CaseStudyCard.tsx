"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function CaseStudyCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex h-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary transition-colors duration-300 group-hover:border-border-hover"
      >
        {/* Thumbnail */}
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ backgroundColor: project.color + "12" }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 md:p-8">
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
          <div className="mt-6 flex flex-col gap-3">
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
