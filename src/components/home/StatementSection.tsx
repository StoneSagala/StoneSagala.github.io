"use client";

import Container from "@/components/ui/Container";
import SplitText from "@/components/ui/SplitText";

export default function StatementSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <div className="max-w-4xl">
          <SplitText
            text="My job is to make products feel simple."
            tag="h2"
            splitType="words"
            delay={60}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-60px"
            textAlign="left"
            className="font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl"
          />
          <SplitText
            text="Because users didn't sign up for a learning curve. "
            tag="h2"
            splitType="words"
            delay={60}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0, delay: 2.0 }}
            threshold={0.1}
            rootMargin="-60px"
            textAlign="left"
            className="font-display text-4xl font-bold leading-tight tracking-tight text-accent md:text-6xl"
          />
        </div>
      </Container>
    </section>
  );
}
