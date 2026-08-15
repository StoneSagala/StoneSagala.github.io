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
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">The Challenge</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              {challenge}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">The Solution</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              {solution}
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
