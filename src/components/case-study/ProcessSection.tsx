import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoPlayer from "@/components/ui/VideoPlayer";
import Lightbox from "@/components/ui/Lightbox";
import type { ProjectSection } from "@/data/projects";

export default function ProcessSection({ sections }: { sections: ProjectSection[] }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">Process</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            How I Got There
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-16">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.08}>
              <div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {section.title}
                  </h3>
                  {section.body && (
                    <p className="mt-3 text-lg leading-relaxed text-text-secondary">
                      {section.body}
                    </p>
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

                  {section.image && !section.image2 && (
                    <div className="mt-8 max-w-xl mx-auto overflow-hidden rounded-xl border border-border">
                      <Lightbox src={section.image} alt={section.title} />
                    </div>
                  )}

                  {section.image && section.image2 && (
                    <div className={`mt-8 grid grid-cols-2 gap-4 ${section.imageSize === "sm" ? "max-w-lg mx-auto" : ""}`}>
                      <div className="overflow-hidden rounded-xl border border-border">
                        <Lightbox src={section.image} alt={section.title} />
                      </div>
                      <div className="overflow-hidden rounded-xl border border-border">
                        <Lightbox src={section.image2} alt={section.title} />
                      </div>
                    </div>
                  )}

                  {section.video && (
                    <div className="max-w-4xl mx-auto">
                      <VideoPlayer src={section.video} />
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
