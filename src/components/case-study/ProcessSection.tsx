import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoPlayer from "@/components/ui/VideoPlayer";
import Lightbox from "@/components/ui/Lightbox";
import BeforeAfterToggle from "@/components/ui/BeforeAfterToggle";
import type { ProjectSection } from "@/data/projects";

export default function ProcessSection({ sections, label }: { sections: ProjectSection[]; label?: { eyebrow: string; heading: string } }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">{label?.eyebrow ?? "Process"}</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            {label?.heading ?? "How I Got There"}
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-16">
          {sections.map((section, i) => {
            const hasSingleImage = !!(section.image && !section.image2);
            const isReversed = i % 2 === 1;
            return (
            <ScrollReveal key={section.title} delay={i * 0.08}>
              <div className={hasSingleImage ? `flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12 md:items-center` : ``}>
                <div className={hasSingleImage && isReversed ? "md:order-2" : ""}>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {section.title}
                  </h3>
                  {section.body && (
                    <p className="mt-3 text-lg leading-relaxed text-text-secondary">
                      {section.body}
                    </p>
                  )}

                  {section.image && section.image2 && (
                    <div className={`mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 ${section.imageSize === "sm" ? "max-w-lg mx-auto" : section.imageSize === "medium" ? "max-w-3xl mx-auto" : ""}`}>
                      <div className="overflow-hidden rounded-xl">
                        <Lightbox src={section.image} alt={section.title} />
                      </div>
                      <div className="overflow-hidden rounded-xl">
                        <Lightbox src={section.image2} alt={section.title} />
                      </div>
                    </div>
                  )}

                  {section.blocks?.map((block, bi) => {
                    if (block.type === "list") {
                      return (
                        <ul key={bi} className="mt-6 space-y-3">
                          {block.items.map((item, ii) => (
                            <li key={ii} className="flex items-start gap-3 text-text-secondary">
                              <span className="mt-3 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                              <span className="text-lg leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (block.type === "keywords") {
                      return (
                        <div key={bi} className="mt-6 flex flex-wrap gap-2">
                          {block.items.map((kw, ii) => (
                            <span
                              key={ii}
                              className="rounded-full border border-border bg-bg-secondary px-4 py-1.5 font-mono text-sm text-text-primary"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      );
                    }

                    if (block.type === "expandable") {
                      return (
                        <details key={bi} className="mt-6 rounded-xl border border-border overflow-hidden group">
                          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-mono text-sm text-text-primary hover:bg-bg-elevated transition-colors">
                            <span>{block.label}</span>
                            <svg
                              className="w-4 h-4 text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                              viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"
                            >
                              <path d="M3 6l5 5 5-5" />
                            </svg>
                          </summary>
                          <div className="border-t border-border px-5 py-6 space-y-6 bg-bg-secondary">
                            {block.sections.map((s, si) => (
                              <div key={si}>
                                <p className="font-mono text-xs text-accent mb-3 uppercase tracking-wider">{s.heading}</p>
                                <ul className="space-y-2">
                                  {s.items.map((item, ii) => (
                                    <li key={ii} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                                      <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </details>
                      );
                    }

                    if (block.type === "text") {
                      return (
                        <p key={bi} className="mt-6 text-lg leading-relaxed text-text-secondary">
                          {block.content}
                        </p>
                      );
                    }

                    if (block.type === "gallery") {
                      const colCount = block.columns ?? (block.images.length <= 2 ? 2 : block.images.length === 3 ? 3 : 4);
                      const colClass = colCount === 2 ? "sm:grid-cols-2" : colCount === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4";
                      return (
                        <div key={bi} className={`mt-8 grid gap-3 grid-cols-2 ${colClass}`}>
                          {block.images.map((src, ii) => (
                            <div key={ii} className="aspect-[4/3] overflow-hidden rounded-xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
                              <Lightbox src={src} alt="" />
                            </div>
                          ))}
                        </div>
                      );
                    }

                    if (block.type === "mosaic") {
                      const cardStyles = [
                        { transform: "rotate(-2deg) translateX(-20px)", zIndex: 4, marginBottom: "-80px" },
                        { transform: "rotate(1.5deg) translateX(24px)",  zIndex: 3, marginBottom: "-80px" },
                        { transform: "rotate(-1deg) translateX(-12px)",  zIndex: 2, marginBottom: "-80px" },
                        { transform: "rotate(2.5deg) translateX(16px)",  zIndex: 1, marginBottom: "0px"   },
                      ];
                      return (
                        <div key={bi} className="relative mt-10 flex flex-col">
                          {block.images.map((src, ii) => (
                            <div
                              key={ii}
                              className="relative w-full"
                              style={cardStyles[ii % cardStyles.length]}
                            >
                              <Image src={src} alt="" width={1200} height={400} className="block w-full h-auto" />
                            </div>
                          ))}
                        </div>
                      );
                    }

                    if (block.type === "stat") {
                      return (
                        <div key={bi} className="mt-6 inline-block border-l-2 border-accent pl-4">
                          <p className="text-3xl font-semibold text-text-primary">{block.value}</p>
                          <p className="mt-0.5 font-mono text-sm text-text-tertiary">{block.label}</p>
                        </div>
                      );
                    }

                    if (block.type === "link") {
                      return (
                        <a
                          key={bi}
                          href={block.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent underline-offset-4 hover:underline"
                        >
                          {block.text}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M2 10L10 2M10 2H5M10 2v5" />
                          </svg>
                        </a>
                      );
                    }

                    return null;
                  })}

                  {section.video && (
                    <div className="max-w-4xl mx-auto">
                      <VideoPlayer src={section.video} />
                    </div>
                  )}

                  {section.beforeVideo && section.afterVideo && (
                    <BeforeAfterToggle
                      beforeVideo={section.beforeVideo}
                      afterVideo={section.afterVideo}
                    />
                  )}
                </div>

                {hasSingleImage && (
                  <div className={`overflow-hidden rounded-xl ${isReversed ? "md:order-1" : ""}`}>
                    <Lightbox src={section.image!} alt={section.title} />
                  </div>
                )}
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
