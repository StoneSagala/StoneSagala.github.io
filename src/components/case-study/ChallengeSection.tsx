import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ChallengeSection({
  challenge,
  solution,
}: {
  challenge: string;
  solution: string;
}) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal>
            <h2 className="mb-2 font-mono text-sm text-accent">The Challenge</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              {challenge}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="mb-2 font-mono text-sm text-accent">The Solution</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              {solution}
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
