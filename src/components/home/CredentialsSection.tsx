import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const credentials = [
  {
    label: "Object Oriented Design",
    desc: "The system and data architecture are mapped into every design before a single wireframe is drawn.",
  },
  {
    label: "Comfort in complexity",
    desc: "Complex domains are where I do my best work. Healthcare, cybersecurity, and enterprise IT so far.",
  },
  {
    label: "6 years in product design",
    desc: "Started with one client at a time. Now supporting four product teams simultaneously.",
  },
];

export default function CredentialsSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <p className="mb-2 font-sans text-sm text-accent">My secret sauce</p>
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            More Than Just Screens
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {credentials.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${i === credentials.length - 1 ? "md:pr-0" : ""}`}>
                <p className="font-sans text-2xl font-bold text-text-primary">{item.label}</p>
                <p className="bento-card__description mt-2">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
