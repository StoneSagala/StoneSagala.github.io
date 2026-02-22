export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    title: "Design Systems",
    description:
      "Building scalable component libraries, design tokens, and governance frameworks for enterprise products.",
    icon: "layers",
  },
  {
    title: "UX Research",
    description:
      "User interviews, usability testing, surveys, and data analysis to drive informed design decisions.",
    icon: "search",
  },
  {
    title: "Product Strategy",
    description:
      "Translating business goals into product roadmaps, aligning stakeholders, and defining success metrics.",
    icon: "target",
  },
  {
    title: "Interaction Design",
    description:
      "Crafting intuitive flows, micro-interactions, and responsive interfaces that delight users.",
    icon: "pointer",
  },
  {
    title: "Prototyping",
    description:
      "High-fidelity interactive prototypes in Figma for testing and stakeholder alignment.",
    icon: "play",
  },
  {
    title: "Front-End Development",
    description:
      "HTML, CSS, React, and Next.js — bridging the gap between design intent and implementation.",
    icon: "code",
  },
];
