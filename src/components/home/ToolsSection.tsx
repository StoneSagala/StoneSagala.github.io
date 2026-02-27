"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  tools, categories, categoryColors, categoryLabels,
  type ToolCategory, type Tool,
} from "@/data/tools";
import {
  siFigma, siFramer, siDovetail, siHubspot,
  siMixpanel, siGoogleanalytics, siNotion, siJira, siConfluence,
  siLinear, siLoom, siWordpress, siClaude, siN8n, siQualtrics,
} from "simple-icons";

const iconPaths: Record<string, string> = {
  siFigma:            siFigma.path,
  siFramer:           siFramer.path,
  siDovetail:         siDovetail.path,
  siHubspot:          siHubspot.path,
  siMixpanel:         siMixpanel.path,
  siGoogleanalytics:  siGoogleanalytics.path,
  siNotion:           siNotion.path,
  siJira:             siJira.path,
  siConfluence:       siConfluence.path,
  siLinear:           siLinear.path,
  siLoom:             siLoom.path,
  siWordpress:        siWordpress.path,
  siClaude:           siClaude.path,
  siN8n:              siN8n.path,
  siQualtrics:        siQualtrics.path,
};

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function ToolIcon({ tool, color }: { tool: Tool; color: string }) {
  const svgProps = {
    className: "h-5 w-5 shrink-0",
    "aria-hidden": true as const,
  };

  if (tool.iconKey && iconPaths[tool.iconKey]) {
    return (
      <svg viewBox="0 0 24 24" fill={color} {...svgProps}>
        <path d={iconPaths[tool.iconKey]} />
      </svg>
    );
  }

  if (tool.customIcon === "figjam") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...svgProps}>
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    );
  }

  if (tool.customIcon === "chatgpt") {
    return (
      <svg viewBox="0 0 24 24" fill={color} {...svgProps}>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.006 14.2A4.5 4.5 0 0 1 2.34 7.896zm16.597 3.855-5.833-3.387 2.02-1.168a.076.076 0 0 1 .071 0l4.816 2.806a4.5 4.5 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.398-.678zm2.007-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.806a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    );
  }

  if (tool.customIcon === "grain") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...svgProps}>
        <path d="M15 10l4.553-2.277A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14" />
        <rect x="2" y="7" width="13" height="10" rx="2" />
      </svg>
    );
  }

  if (tool.customIcon === "tray") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...svgProps}>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M7 6h10M6.5 7.5l4 9M17.5 7.5l-4 9" />
      </svg>
    );
  }

  if (tool.customIcon === "agile") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...svgProps}>
        <polyline points="1 4 1 10 7 10" />
        <polyline points="23 20 23 14 17 14" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
      </svg>
    );
  }

  if (tool.customIcon === "ooux") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...svgProps}>
        <rect x="2" y="2" width="8" height="5" rx="1" />
        <rect x="14" y="2" width="8" height="5" rx="1" />
        <rect x="8" y="16" width="8" height="5" rx="1" />
        <line x1="6" y1="7" x2="12" y2="16" />
        <line x1="18" y1="7" x2="12" y2="16" />
      </svg>
    );
  }

  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center font-mono text-xs font-semibold" style={{ color }} aria-hidden>
      {tool.name[0]}
    </span>
  );
}

export default function ToolsSection() {
  const [active, setActive] = useState<ToolCategory>("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState(0);

  // Lock grid height to its maximum (the "All" view)
  useEffect(() => {
    if (!gridRef.current) return;
    let maxH = 0;
    const observer = new ResizeObserver(entries => {
      const h = entries[0].contentRect.height;
      if (h > maxH) {
        maxH = h;
        setMinHeight(h);
      }
    });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  // Proximity border glow on tool chips
  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const PROXIMITY = 120;
    const getChips = () => Array.from(container.querySelectorAll<HTMLElement>('.tool-chip'));

    const handleMouseMove = (e: MouseEvent) => {
      getChips().forEach(chip => {
        const rect = chip.getBoundingClientRect();
        const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
        const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const intensity = distance === 0 ? 1 : Math.max(0, 1 - distance / PROXIMITY);
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        chip.style.setProperty('--glow-x', `${x}%`);
        chip.style.setProperty('--glow-y', `${y}%`);
        chip.style.setProperty('--glow-intensity', String(intensity));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filtered = active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">My Secret Sauce</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            Tools & Frameworks
          </h2>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = active === cat;
              const color = cat !== "All" ? categoryColors[cat] : undefined;
              const count = cat === "All" ? tools.length : tools.filter((t) => t.category === cat).length;
              const label = categoryLabels[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  aria-label={`${label}, ${count} item${count !== 1 ? "s" : ""}`}
                  className={`rounded-lg px-4 py-1.5 font-mono text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent ${
                    isActive ? "" : "border border-border text-text-secondary hover:border-border-hover hover:text-text-primary"
                  }`}
                  style={isActive ? { backgroundColor: color ?? "var(--color-accent)", color: "var(--color-bg-primary)" } : undefined}
                >
                  {label} <span className="opacity-60" aria-hidden>({count})</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tool grid */}
        <div
          ref={gridRef}
          className="mt-8 flex flex-wrap items-start gap-3 content-start"
          style={{ minHeight }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tool) => {
              const color = categoryColors[tool.category];
              const rgb = hexToRgb(color);
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.18 }}
                  className="tool-chip tool-chip--glow flex items-center gap-3 rounded-xl bg-bg-secondary px-4 py-3 transition-colors duration-200"
                  style={{
                    border: `1px solid ${color}33`,
                    '--glow-color': rgb,
                    '--glow-x': '50%',
                    '--glow-y': '50%',
                    '--glow-intensity': '0',
                    '--glow-radius': '120px',
                  } as React.CSSProperties}
                >
                  <ToolIcon tool={tool} color={color} />
                  <span className="font-mono text-sm text-text-secondary">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
