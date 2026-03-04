export type ProcessBlock =
  | { type: "list"; items: string[] }
  | { type: "keywords"; items: string[] }
  | { type: "link"; text: string; url: string };

export interface ProjectSection {
  title: string;
  body: string;
  image?: string;
  image2?: string;
  imageSize?: "sm" | "full";
  video?: string;
  beforeVideo?: string;
  afterVideo?: string;
  blocks?: ProcessBlock[];
}

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
  summary?: string;
  challenge: string;
  solution: string;
  testimonial?: { text: string; author: string };
  results: { label: string; value: string; description: string; link?: { text: string; url: string } }[];
  sections: ProjectSection[];
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
    subtitle: "A design system worth $800,000",
    company: "KLAS Research",
    description:
      "Spearheaded the complete overhaul of the KLAS design system — rebuilding components for WCAG accessibility, implementing design tokens, and collaborating across departments to create a system estimated at $800,000 in developer and designer time saved.",
    role: "Lead UI Designer",
    timeline: "2023 — 2024",
    team: "Solo designer",
    tools: [],
    thumbnail: "/images/projects/design-system-klas/thumbnail.webp",
    color: "#F59E0B",
    summary:
      "I spearheaded the project to completely overhaul the KLAS design system. This included recreating components and processes to be WCAG accessible, collaborating with multiple departments to plan for use cases, and creating a naming structure with design tokens for easy implementation. By the end of the project, the system was estimated to be worth $800,000 after calculating the time saved by developers and designers.",
    challenge:
      "Developers were breaking the site every sprint just to fix it. Bug fixes crowded the backlog, innovation stalled, and researchers had to navigate 34 error states just to submit their work. Nobody had a plan to get out.",
    solution:
      "Starting from an accessibility audit and self-directed learning, I rebuilt the design system from the ground up — consolidating components, creating a design token architecture connected to Azure DevOps, and documenting everything with proper use, misuse, and accessibility standards.",
    testimonial: {
      text: "Stone is a rockstar, I know how much work this takes!",
      author: "Jessica Wallace Simpson — Art Manager, KLAS Research",
    },
    results: [
      {
        label: "estimated system value",
        value: "$800K",
        description:
          "Calculated from time saved by developers and designers using the system instead of building components manually.",
        link: {
          text: "Learn More",
          url: "https://medium.com/design-bootcamp/how-i-calculated-the-business-case-for-a-design-system-549def283eb5",
        },
      },
      {
        label: "WCAG compliant",
        value: "AA",
        description:
          "Every component rebuilt to meet accessibility standards, reducing legal liability and improving usability across the platform.",
      },
      {
        label: "month solo project",
        value: "8",
        description:
          "Delivered end-to-end: audit, learning, component redesign, token architecture, and cross-team documentation.",
      },
    ],
    sections: [
      {
        title: "",
        body: "We've all been through work lulls when you're unsure what to do next. During one such lull, my manager suggested I dive into accessibility. What initially started as a learning project eventually evolved into an 8-month revamp of the design system — transforming it into an accessible platform while addressing years of technical debt.",
      },
      {
        title: "Developers were playing whack-a-mole",
        body: "Imagine every time you wanted to change something on the website, you had to break another part of it? That was the developer's reality every sprint. Because of this, the company went further into technical debt — the backlog was cluttered with bug fixes, innovation was sidelined, and users were frustrated.",
      },
      {
        title: "What did this mean for the business?",
        body: "",
        blocks: [
          {
            type: "list",
            items: [
              "KLAS users were making 10+ million dollar decisions on the platform. An inaccessible experience created real legal liability.",
              "Developers were working overtime every sprint — bug fixes kept getting prioritized over new features.",
              "Clients bypassed the website entirely and called managers directly, creating bottlenecks and straining client relationships.",
            ],
          },
        ],
      },
      {
        title: "KLAS didn't have the resources for a team — so I did it myself",
        body: "It would be almost impossible to overhaul the design system without first understanding what existed and how each component was used. The first month was spent documenting:",
        video: "/videos/design-system-klas/audit.mp4",
        blocks: [
          {
            type: "list",
            items: [
              "Use cases for every component",
              "All existing components and variants",
              "Interactions and states",
              "Accessibility issues and failures",
            ],
          },
        ],
      },
      {
        title: "The best lessons are the ones you teach yourself",
        body: "The results of my audits made one thing clear: I needed to become an expert in accessibility before making any major changes. I read books, took courses, and studied WCAG standards. By the end of my self-directed boot camp, I was recognized as an accessibility expert by UXCEL — scoring in the top 10%.",
        image: "/images/projects/design-system-klas/accessibility-certificate.webp",
      },
      {
        title: "Re-designing the components",
        body: "The existing design system had more components than KLAS needed, confusing designers and creating inconsistencies we couldn't afford. All that clutter was also a problem for developers — manually coding each component meant projects took longer than estimated. I needed to show the team that less is more. A simpler design system would create a better user experience across the board.",
        video: "/videos/design-system-klas/redesigning-components.mp4",
      },
      {
        title: "Simplifying data visualizations",
        body: "Users were frustrated because data visualizations had too many colors and data points, making them hard to read. Best practice calls for no more than 6 data points on a graph — KLAS frequently had up to 12. I collaborated with multiple teams to build a color palette that was:",
        image: "/images/projects/design-system-klas/data-viz-colors.webp",
        image2: "/images/projects/design-system-klas/chart-types.webp",
        imageSize: "sm",
        blocks: [
          {
            type: "list",
            items: [
              "12+ accessible colors covering all department use cases",
              "AA accessible across all combinations",
              "Flexible enough to meet the needs of every team",
            ],
          },
        ],
      },
      {
        title: "Creating design tokens",
        body: "Several of KLAS's bugs stemmed from developers manually coding each component — opening the door for errors every time something was deployed. I created a naming structure and implemented design tokens used for every component in the system, then worked with developers to connect those tokens to Azure DevOps for easy implementation.",
        image: "/images/projects/design-system-klas/design-tokens.webp",
        imageSize: "sm",
      },
      {
        title: "Documentation and implementation",
        body: "All this work would mean nothing without documentation. I created documentation for every component and color, covering:",
        image: "/images/projects/design-system-klas/documentation-intro.webp",
        blocks: [
          {
            type: "list",
            items: [
              "Proper use",
              "Improper use",
              "Best practices",
              "Accessibility standards",
            ],
          },
        ],
      },
      {
        title: "What changed?",
        body: "",
        beforeVideo: "/videos/design-system-klas/before.mp4",
        afterVideo: "/videos/design-system-klas/after.mp4",
        blocks: [
          {
            type: "list",
            items: [
              "Complete accessibility — KLAS now has a fully accessible design system, letting designers work confidently and reducing legal liability.",
              "Made headway on technical debt — developers could finally focus on innovation instead of sprint after sprint of bug fixes.",
              "Created respect for design company-wide — collaborative sessions with multiple departments turned the design team into a real resource.",
            ],
          },
        ],
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
    thumbnail: "/images/projects/ai-projects/thumbnail.webp",
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
  {
    slug: "web-design-cvma",
    title: "Web Design",
    subtitle: "Local gym with world level talent",
    company: "Cache Valley Martial Arts",
    description:
      "Created a new website, optimized SEO, developed brand standards, and delivered a marketing campaign for a martial arts gym with world-class coaches.",
    role: "Lead Designer",
    timeline: "2022",
    team: "1 Designer",
    tools: [],
    thumbnail: "/images/projects/web-design-cvma/thumbnail.webp",
    color: "#10B981",
    summary:
      "Cache Valley Martial Arts is a gym where I trained for several years. I created a new website, optimized their SEO, developed brand standards, and delivered a marketing campaign. By the end of the project, we saw web traffic increase by 24% and CVMA became ranked #1 on Google for gyms in the area.",
    challenge:
      "CVMA had world-class coaches — World team members, Gold Glove winners, and black belts — but their outdated website and absent brand strategy were keeping them a secret in Logan, UT. They wanted to grow their customer base and expand their semi-pro fighting team.",
    solution:
      "Rebuilt the website with clear information architecture, developed a confident brand voice, optimized for local SEO, and delivered a full marketing plan — all aimed at attracting students and families to a gym they might have otherwise overlooked.",
    testimonial: {
      text: "His work is professional and I will recommend him to anyone who's looking to get a professional website done.",
      author: "CVMA Head Coach",
    },
    results: [
      {
        label: "increase in web traffic",
        value: "24%",
        description:
          "CVMA saw a large spike soon after the website and re-brand went live, with new inquiries from students, families, and schools.",
      },
      {
        label: "ranked on Google",
        value: "#1",
        description:
          "Among fighting gyms in Logan, UT — driven by targeted local SEO and increased web traffic.",
      },
      {
        label: "person quit their 9 to 5",
        value: "1",
        description:
          "Full classes and multiple champions — more coaches had to be brought in to accommodate the rise in students.",
      },
    ],
    sections: [
      {
        title: "Undiscovered",
        body: "CVMA is full of some of the best coaches Utah has to offer. World team members, Gold Glove winners, and black belts could be found on their staff. CVMA wanted to take the next step to increase its customer base and grow its semi-pro fighting team.",
      },
      {
        title: "A local gym with world level talent",
        body: "Have you ever been secretly good at something and it was fun to keep it on the down low? Well, CVMA was great at what they did and was tired of being kept secret. The problem was that CVMA is in Logan, UT — usually flooded with seasonal, broke college students. CVMA needed to switch its brand and marketing strategy to attract its real target audience: students and families.",
        blocks: [
          {
            type: "list",
            items: [
              "18 to 35-year-old men and women actively searching or involved with exercise, self-defense, and/or fight training.",
              "Parents of children and teens ages 6–18 looking for youth classes or activities.",
            ],
          },
        ],
      },
      {
        title: "What does this mean for the business?",
        body: "",
        blocks: [
          {
            type: "list",
            items: [
              "CVMA would need to highlight their youth programs to help parents trust that their children were safe and developing healthy skills.",
              "CVMA's online presence needed to be confident and inviting to people who had negative connotations against fighting gyms.",
              "If CVMA didn't make changes to its branding and website, it was possible that the company would fail.",
            ],
          },
        ],
      },
      {
        title: "I was the target audience, so I knew who to research",
        body: "After doing extensive market research comparing CVMA's offering and brand to other fighting gyms in the area, I realized I needed to perform field research to understand what CVMA was doing well. I interviewed people who attended classes and several students on campus to get a better understanding of:",
        blocks: [
          {
            type: "list",
            items: [
              "Overall opinion of fighting gyms",
              "Why someone would think about joining",
              "What people are concerned about regarding martial arts",
            ],
          },
        ],
      },
      {
        title: "Establishing great information architecture",
        body: "Before we talked about UI, it was important to get the content right. Content is king when convincing potential clients to try something new and scary. It was critical to work with the business to create content that stayed true to the brand and made martial arts more inclusive. My research showed that our target audience wanted a low-risk trial period as well as to be educated on the benefits of martial arts.",
      },
      {
        title: "Choosing a font and voice",
        body: "CVMA's voice needed to be friendly and inviting but sound confident and full of authority — to encourage students and families to try something new while reinforcing that CVMA staff were trained professionals. I chose \"Impact\" as the header font paired with \"din-next\" as the body font to emphasize boldness and authority. The language on the website changed from wishy-washy to definite and inviting. For example: \"Safety is a top priority\" became \"Your child will be safe.\"",
      },
      {
        title: "Getting ranked #1",
        body: "A new website and brand can only get you so far if people can't find you. It was important to research the trending keywords in the area that would get CVMA to the top of Google listings. Some of the top keywords implemented into content and page descriptions were:",
        blocks: [
          {
            type: "keywords",
            items: [
              "Self Defense",
              "MMA",
              "Boxing",
              "Fitness",
              "Coaching",
            ],
          },
        ],
      },
      {
        title: "Creating a scalable system",
        body: "I was concerned about creating a system that would be hard for them to manage after the project ended. The business was excited about the rebrand but needed help ensuring scalability. I worked with the owners to install a booking system that would automatically inform coaches of new students attending and how large class sizes would be.",
      },
      {
        title: "Marketing plan",
        body: "I led a small team to create an in-depth marketing plan for CVMA. Equipped with a new website, brand, and SEO, a marketing plan was the last thing CVMA needed to succeed. This plan included an estimated budget, measurements of success, examples, and clear instructions on the type of content needed to attract their target audience.",
      },
    ],
  },
];
