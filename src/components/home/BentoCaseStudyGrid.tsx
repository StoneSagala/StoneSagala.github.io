"use client";

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectThumbnail from '@/components/ui/ProjectThumbnail';
import SpotlightCard from '@/components/ui/SpotlightCard';

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export default function BentoCaseStudyGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia('(hover: hover)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.classList.add('wave-animate');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 bento-case-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-accent">Proof I Design</p>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">Case Studies</h2>
        </div>

        <div ref={gridRef} className="bento-case-grid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="bento-link"
              aria-label={`View case study: ${project.title}`}
            >
              <SpotlightCard
                className="bento-case-card"
                spotlightColor={`rgba(${hexToRgb(project.color)}, 0.12)`}
              >
                <div className="bento-card__body">
                  <div className="bento-card__header">
                    <span className="bento-card__label" style={{ color: project.color }}>
                      {project.company}
                    </span>
                  </div>
                  <div className="bento-card__content">
                    <h3 className="bento-card__title">{project.title}</h3>
                    <p className="bento-card__description">{project.subtitle}</p>
                  </div>
                  {project.results.length > 0 && (
                    <div className="bento-card__metrics">
                      {project.results.slice(0, 3).map((result) => (
                        <div key={result.label} className="bento-card__metric">
                          <span className="bento-metric__value" style={{ color: project.color }}>
                            {result.value}
                          </span>
                          <span className="bento-metric__label">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <ProjectThumbnail slug={project.slug} color={project.color} />
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
