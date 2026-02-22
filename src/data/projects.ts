export interface Project {
  slug: string;
  title: string;
  subtitle: string;
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
    slug: "klas-design-system",
    title: "KLAS Design System",
    subtitle: "Scaling design consistency across enterprise healthcare",
    description:
      "Built a comprehensive design system for KLAS Research, unifying component libraries and design tokens across multiple product teams to improve velocity and consistency.",
    role: "Lead Product Designer",
    timeline: "2023 — 2024",
    team: "3 designers, 8 engineers",
    tools: ["Figma", "Storybook", "React", "Design Tokens"],
    thumbnail: "/images/projects/klas-design-system/thumbnail.jpg",
    color: "#4F7BF7",
    challenge:
      "KLAS Research had multiple product teams building interfaces independently, leading to inconsistent user experiences, duplicated effort, and slow onboarding for new team members.",
    solution:
      "Designed and implemented a shared design system with reusable components, design tokens, and comprehensive documentation. Created governance processes and contribution guidelines to ensure adoption.",
    results: [
      {
        label: "Faster Feature Delivery",
        value: "40%",
        description: "Reduction in design-to-development handoff time",
      },
      {
        label: "Component Adoption",
        value: "95%",
        description: "Of new features built with design system components",
      },
      {
        label: "Design Consistency",
        value: "3x",
        description: "Improvement in cross-product visual consistency score",
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
    slug: "ooux-survey-platform",
    title: "OOUX Survey Platform",
    subtitle: "Reimagining healthcare survey experiences",
    description:
      "Redesigned the core survey platform at KLAS Research using Object-Oriented UX methodology, dramatically improving completion rates and data quality.",
    role: "Senior Product Designer",
    timeline: "2022 — 2023",
    team: "2 designers, 5 engineers, 1 PM",
    tools: ["Figma", "OOUX", "Maze", "Analytics"],
    thumbnail: "/images/projects/ooux-survey-platform/thumbnail.jpg",
    color: "#10B981",
    challenge:
      "The existing survey platform suffered from low completion rates and poor data quality. Healthcare professionals found the survey experience confusing and time-consuming.",
    solution:
      "Applied OOUX methodology to restructure the information architecture around healthcare objects (providers, facilities, products) rather than arbitrary question groupings, creating a more intuitive survey flow.",
    results: [
      {
        label: "Completion Rate",
        value: "28%",
        description: "Increase in survey completion rates",
      },
      {
        label: "Time on Task",
        value: "35%",
        description: "Reduction in average survey completion time",
      },
      {
        label: "Data Quality",
        value: "22%",
        description: "Improvement in response quality scores",
      },
    ],
    sections: [
      {
        title: "OOUX Mapping",
        body: "Mapped the entire survey domain using OOUX principles, identifying core objects, their relationships, and the calls-to-action associated with each.",
      },
      {
        title: "Progressive Disclosure",
        body: "Redesigned the survey flow to progressively reveal complexity, reducing cognitive load and helping respondents maintain context throughout.",
      },
      {
        title: "Validation & Testing",
        body: "Conducted 3 rounds of usability testing with healthcare professionals, iterating on the design based on quantitative and qualitative findings.",
      },
    ],
  },
  {
    slug: "cvma-website",
    title: "CVMA Website",
    subtitle: "Redesigning the digital home of Cache Valley Martial Arts",
    description:
      "Led the complete redesign of the Cache Valley Martial Arts website, improving class discovery, member engagement, and online registration.",
    role: "Product Designer",
    timeline: "2022",
    team: "1 designer, 2 developers",
    tools: ["Figma", "WordPress", "Elementor"],
    thumbnail: "/images/projects/cvma-website/thumbnail.jpg",
    color: "#F59E0B",
    challenge:
      "CVMA's website was outdated, difficult to navigate, and failing to serve its members effectively. Event registration was cumbersome, and member resources were buried.",
    solution:
      "Conducted member research to understand key needs, then redesigned the site with clear information architecture, streamlined event registration, and a modern responsive design.",
    results: [
      {
        label: "Member Engagement",
        value: "45%",
        description: "Increase in monthly active member sessions",
      },
      {
        label: "Event Registration",
        value: "60%",
        description: "Increase in online event registrations",
      },
      {
        label: "Bounce Rate",
        value: "30%",
        description: "Reduction in homepage bounce rate",
      },
    ],
    sections: [
      {
        title: "Member Research",
        body: "Interviewed 15 CVMA members across different practice types to understand their primary needs and pain points with the existing digital experience.",
      },
      {
        title: "Information Architecture",
        body: "Restructured the site around member tasks: finding resources, registering for events, and connecting with peers, rather than organizational departments.",
      },
      {
        title: "Responsive Design",
        body: "Created a fully responsive design system that works seamlessly from mobile devices in veterinary clinics to desktop monitors in offices.",
      },
    ],
  },
  {
    slug: "umc-track",
    title: "UMC Track",
    subtitle: "Elevating the digital experience for Utah Motorsports Campus",
    description:
      "Designed the digital experience for Utah Motorsports Campus (formerly Miller Motorsports Park), home to the 2016 Track of the Year.",
    role: "UX Designer",
    timeline: "2021 — 2022",
    team: "1 designer, 3 engineers, 1 PM",
    tools: ["Figma", "React", "D3.js"],
    thumbnail: "/images/projects/umc-track/thumbnail.jpg",
    color: "#8B5CF6",
    challenge:
      "Academic advisors lacked visibility into student progress patterns, making it difficult to identify struggling students before they fell too far behind.",
    solution:
      "Designed a dashboard-centric application with data visualization and early warning indicators, enabling advisors to proactively reach out to at-risk students.",
    results: [
      {
        label: "Early Intervention",
        value: "3x",
        description: "Increase in proactive advisor outreach",
      },
      {
        label: "Student Retention",
        value: "15%",
        description: "Improvement in at-risk student retention",
      },
      {
        label: "Advisor Efficiency",
        value: "50%",
        description: "Reduction in time spent compiling student data",
      },
    ],
    sections: [
      {
        title: "Stakeholder Alignment",
        body: "Facilitated workshops with advisors, faculty, and administrators to align on key metrics and establish what constitutes 'at-risk' across departments.",
      },
      {
        title: "Dashboard Design",
        body: "Created an intuitive dashboard with progressive disclosure, allowing advisors to quickly scan their caseload and drill into individual student details.",
      },
      {
        title: "Data Visualization",
        body: "Designed custom visualizations for student progress patterns, making complex academic data accessible and actionable for non-technical advisors.",
      },
    ],
  },
];
