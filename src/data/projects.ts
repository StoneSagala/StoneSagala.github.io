export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  description: string;
  role: string;
  timeline: string;
  team: string;
  tools: string[];
  thumbnail: string;
  color: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; description: string }[];
  sections: {
    title: string;
    body: string;
    image?: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "powershell-scanner-pdq",
    title: "PowerShell Scanner",
    subtitle: "One script to manage every device",
    company: "PDQ.com",
    description:
      "Redesigned the grouped deployments experience for PDQ, enabling IT administrators to deploy software across complex device groups with greater speed and confidence.",
    role: "UX Designer",
    timeline: "2024",
    team: "2 designers, 6 engineers, 1 PM",
    tools: [],
    thumbnail: "/images/projects/grouped-deployments-pdq/thumbnail.webp",
    color: "#4F7BF7",
    challenge:
      "IT admins were struggling to manage software deployments across large, complex device groups. The existing workflow required too many steps and lacked clear feedback, leading to errors and lost time.",
    solution:
      "Redesigned the deployment flow with a clearer grouping model, real-time status feedback, and a streamlined interface that reduced the steps required to deploy across multiple device groups.",
    results: [
      {
        label: "possible configurations",
        value: "∞",
        description: "Reduction in time to complete a grouped deployment",
      },
      {
        label: "most requested feature",
        value: "#1",
        description: "Decrease in user-reported deployment errors",
      },

    ],
    sections: [
      {
        title: "Discovery & Research",
        body: "Conducted stakeholder interviews and reviewed FullStory sessions to identify the most common failure points in the existing deployment workflow.",
      },
      {
        title: "Information Architecture",
        body: "Restructured the grouping model to better reflect how IT admins mentally organize their device fleets, reducing cognitive load across the flow.",
      },
      {
        title: "Iterative Testing",
        body: "Ran 3 rounds of usability testing via Maze, iterating on the status feedback patterns and confirmation steps based on admin feedback.",
      },
    ],
  },
  {
    slug: "design-system-klas",
    title: "Design System",
    subtitle: "From audit to documentation",
    company: "KLAS Research",
    description:
      "Built a comprehensive design system for KLAS Research, unifying component libraries and design tokens across multiple product teams to improve velocity and consistency.",
    role: "Lead Product Designer",
    timeline: "2023 — 2024",
    team: "3 designers, 8 engineers",
    tools: [],
    thumbnail: "/images/projects/design-system-klas/thumbnail.png",
    color: "#F59E0B",
    challenge:
      "Multiple product teams at KLAS were building interfaces independently, leading to inconsistent user experiences, duplicated effort, and slow onboarding for new team members.",
    solution:
      "Designed and implemented a shared design system with reusable components, design tokens, and comprehensive documentation. Created governance processes and contribution guidelines to ensure adoption.",
    results: [
      {
        label: "projected savings",
        value: "$800,000",
        description: "Reduction in design-to-development handoff time",
      },
      {
        label: "WCAG compliant",
        value: "AA",
        description: "Of new features built with design system components",
      },
      {
        label: "month project",
        value: "8 ",
        description: "Improvement in cross-product visual consistency",
      },
    ],
    sections: [
      {
        title: "Research & Audit",
        body: "Conducted a comprehensive audit of existing UI patterns across all KLAS products, cataloging over 200 unique component variations and identifying opportunities for consolidation.",
      },
      {
        title: "Token Architecture",
        body: "Established a multi-tier design token system supporting theming and brand variations, with semantic naming conventions that improved developer experience.",
      },
      {
        title: "Component Library",
        body: "Designed and documented 60+ reusable components with multiple variants, states, and accessibility requirements built in from the start.",
      },
    ],
  },
  {
    slug: "web-design-cvma",
    title: "Web Design",
    subtitle: "Local company with world class talent",
    company: "Cache Valley Martial Arts",
    description:
      "Led the complete redesign of the Cache Valley Martial Arts website, improving class discovery, member engagement, and online registration.",
    role: "Product Designer",
    timeline: "2022",
    team: "1 designer, 2 developers",
    tools: [],
    thumbnail: "/images/projects/web-design-cvma/thumbnail.png",
    color: "#10B981",
    challenge:
      "CVMA's existing website was outdated and difficult to navigate, making it hard for prospective members to find class schedules and sign up. The site didn't reflect the quality of the gym.",
    solution:
      "Conducted user research with current and prospective members, then redesigned the site with a clear information architecture, streamlined class registration, and a bold visual identity.",
    results: [
      {
        label: "Traffic increase",
        value: "24%",
        description: "Increase in online membership registrations",
      },
      {
        label: "Local Google ranking",
        value: "#1",
        description: "Reduction in homepage bounce rate",
      },
      {
        label: "person quit their 9 to 5",
        value: "1",
        description: "Reduction in homepage bounce rate",
      },
      
    ],
    sections: [
      {
        title: "Member Research",
        body: "Interviewed current and prospective CVMA members to understand their primary needs and pain points with the existing digital experience.",
      },
      {
        title: "Information Architecture",
        body: "Restructured the site around visitor tasks — finding classes, learning about instructors, and registering — rather than internal organizational structure.",
      },
      {
        title: "Visual Identity",
        body: "Developed a bold, energetic visual direction that reflected the culture and intensity of the gym while remaining approachable to new members.",
      },
    ],
  },
  {
    slug: "voc-agent",
    title: "AI Agent",
    subtitle: "Collect, parse, categorize, and document user feedback",
    company: "PDQ.com / Personal",
    description:
      "Designing AI-powered experiences at PDQ, shaping how IT admins interact with intelligent features that reduce manual work and surface smarter insights.",
    role: "UX Designer",
    timeline: "2024 — Present",
    team: "2 designers, 8 engineers, 1 PM",
    tools: [],
    thumbnail: "/images/projects/ai-projects/thumbnail.jpg",
    color: "#A855F7",
    challenge:
      "IT admins were spending hours on repetitive tasks that could be automated. The challenge was designing AI-assisted workflows that felt trustworthy and transparent, not overwhelming.",
    solution:
      "Designed AI-native interfaces that surface intelligent recommendations at the right moment, giving admins the control to accept, modify, or override — keeping humans in the loop.",
    results: [
      {
        label: "extraction accuracy score",
        value: "85%",
        description: "Average weekly time saved per admin",
      },
      {
        label: "custom GPTs",
        value: "2",
        description: "Of active users engaging with AI features",
      },
      {
        label: "feedback collected each quarter",
        value: "200,000+",
        description: "Of active users engaging with AI features",
      },

    ],
    sections: [
      {
        title: "Research & Principles",
        body: "Established AI design principles for PDQ focused on transparency, control, and graceful failure — ensuring admins always understood what the AI was doing and why.",
      },
      {
        title: "Interaction Patterns",
        body: "Designed a suite of AI interaction patterns including inline suggestions, confidence indicators, and one-click overrides that balanced automation with admin control.",
      },
      {
        title: "Testing & Iteration",
        body: "Ran concept testing sessions with IT admins to validate trust and usability, iterating on the explainability and recovery patterns based on feedback.",
      },
    ],
  },
];
