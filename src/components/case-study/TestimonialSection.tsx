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
    <section className="py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="font-sans text-6xl leading-none text-accent" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-2 text-3xl font-semibold leading-snug text-text-primary">
              {text}
            </p>
            <p className="mt-6 font-sans text-sm text-accent">{author}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
