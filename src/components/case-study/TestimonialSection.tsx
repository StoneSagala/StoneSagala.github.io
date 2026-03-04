import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TestimonialSection({
  text,
  author,
}: {
  text: string;
  author: string;
}) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="font-display text-6xl leading-none text-accent" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-2 text-2xl font-semibold leading-snug text-text-primary md:text-3xl">
              {text}
            </p>
            <p className="mt-6 font-mono text-sm text-accent">{author}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
