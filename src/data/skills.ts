export interface Skill {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  {
    title: "Learning",
    description:
      "Working to better understand customers, features, and the domain will always be part of the job. Doing this quickly is important so you can design the best solutions.",
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
