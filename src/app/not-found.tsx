import Container from "@/components/ui/Container";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center pt-16">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="font-mono text-6xl font-bold text-accent">404</p>
          <AnimatedText
            text="Page not found."
            className="mt-4 text-3xl font-semibold text-text-primary"
            as="h1"
          />
          <p className="mt-4 text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
