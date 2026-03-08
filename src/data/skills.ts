export interface Skill {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  {
    title: "Domain Research",
    description:
      "Working quickly to understand customers, features, and unfamiliar domains is how you design the right thing. Speed to insight matters as much as what you do with it.",
    icon: "book",
    color: "#4F7BF7",
  },
  {
    title: "Object-Oriented Design",
    description:
      "Designing in objects and relationships, similar to developers, is a methodology used by Delta, IKEA, and Disney. This produces more coherent, scalable products.",
    icon: "ooux",
    color: "#8B5CF6",
  },
  {
    title: "Information Architecture",
    description:
      "Structuring complex systems and information-dense applications may not be pretty, but it's critical — especially when you consider that most designs are over 50% text.",
    icon: "tree",
    color: "#10B981",
  },
  {
    title: "AI Integration",
    description:
      "From prompt engineering to building AI agents, AI is a key way to save hours, days, or weeks — freeing up more time to design solutions and understand users.",
    icon: "ai",
    color: "#FF9933",
  },
];
