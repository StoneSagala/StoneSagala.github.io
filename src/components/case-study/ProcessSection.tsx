import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Section {
  title: string;
  body: string;
}

export default function ProcessSection({ sections }: { sections: Section[] }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-mono text-sm text-accent">Process</p>
          <h2 className="text-3xl font-semibold text-text-primary md:text-4xl">
            How I Got There
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-12">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.1}>
              <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                <p className="font-mono text-sm text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-text-secondary">
                    {section.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
