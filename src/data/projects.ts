export type ProcessBlock =
  | { type: "list"; items: string[] }
  | { type: "keywords"; items: string[] }
  | { type: "text"; content: string }
  | { type: "link"; text: string; url: string }
  | { type: "expandable"; label: string; sections: { heading: string; items: string[] }[] }
  | { type: "mosaic"; images: string[] }
  | { type: "gallery"; images: string[]; columns?: 2 | 3 | 4 }
  | { type: "stat"; value: string; label: string };

export interface ProjectSection {
  title: string;
  body: string;
  image?: string;
  image2?: string;
  imageSize?: "sm" | "medium" | "full";
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
  complete?: boolean;
  heroTitle?: string;
  processLabel?: { eyebrow: string; heading: string };
  results: { label: string; value: string; description: string; link?: { text: string; url: string } }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "powershell-scanner-pdq",
    title: "PowerShell Scanner",
    subtitle: "Bringing the most-requested feature back to the cloud. Safely.",
    company: "PDQ.com",
    description:
      "Redesigned the PowerShell Scanner for PDQ Connect, solving the accessibility, infrastructure, and data organization challenges that had prevented it from shipping for years.",
    role: "Lead Designer",
    timeline: "2024–2025",
    team: "2 designers, 6 engineers, 1 PM",
    tools: [],
    thumbnail: "/images/projects/powershell-scanner-pdq/final-powershell-page.webp",
    color: "#4F7BF7",
    summary:
      "I led the end-to-end redesign of PDQ's PowerShell Scanner, the #1 most requested feature for their cloud platform, Connect. This included designing a guided three-step creation workflow, learning PowerShell myself to understand the experience firsthand, running rapid user testing with the Discord community, and building a script library to lower the barrier for newer admins. By the end, the feature shipped to strong customer reception after years of demand, turning a 12-year-old desktop tool into a structured, cloud-native workflow any admin could use.",
    challenge:
      "PowerShell is the go-to language for managing Windows computers. For over 12 years, IT admins used PDQ's PowerShell Scanner to pull device data (battery health, uptime, software compliance, etc.) and use it to automatically control their environment. When PDQ launched Connect, the scanner didn't come with it. The feature required PowerShell knowledge, could overload servers, and returned data in any format the user chose. We had to solve all three before it could ship.",
    solution:
      "I designed a guided three-step workflow: write your script, test it on a single device, then validate and label your output. That single constraint (test before you deploy) solved all three problems at once. It gave newer admins a safe place to learn, prevented runaway scripts from hitting the whole fleet, and turned unpredictable output into data Connect could actually use.",
    results: [
      {
        label: "most requested feature",
        value: "#1",
        description: "Delivered after years of demand from users who had relied on it in D&I and lost it when moving to Connect.",
      },
      {
        label: "Figma versions",
        value: "5+",
        description: "Iterated from a blank code editor to a guided 3-step creation flow through continuous grooming and stakeholder review.",
      },
      {
        label: "problems solved, one workflow",
        value: "3",
        description: "Approachability, system strain, and output organization, all addressed through the test-first creation flow.",
      },
    ],
    sections: [
      {
        title: "The #1 most requested feature",
        body: "When admins moved from D&I to Connect, they lost access to their PowerShell scripts. Workflows they had built over years suddenly needed workarounds. The frustration showed up everywhere: support tickets, forums, Discord threads. It was the most requested feature for years.",
        image: "/images/projects/powershell-scanner-pdq/discord-comments-composite.webp",
        imageSize: "full",
        blocks: [
          {
            type: "gallery",
            columns: 2,
            images: [
              "/images/projects/powershell-scanner-pdq/discord-comment-1.webp",
              "/images/projects/powershell-scanner-pdq/discord-comment-4.webp",
            ],
          },
        ],
      },
      {
        title: "Left behind when we moved to the cloud",
        body: "This is the original scanner, a Windows desktop dialog that IT admins had used for over a decade. When we first talked about bringing it to Connect, it seemed straightforward. We'd rebuild the UI, match the functionality, and ship it. We had no idea how complex it would turn out to be.",
        blocks: [
          {
            type: "gallery",
            columns: 2,
            images: [
              "/images/projects/powershell-scanner-pdq/di-powershell-scanner.webp",
              "/images/projects/powershell-scanner-pdq/di-scanner-selection.webp",
              "/images/projects/powershell-scanner-pdq/di-scanner-data.webp",
              "/images/projects/powershell-scanner-pdq/di-how-to-scan.webp",
            ],
          },
        ],
      },
      {
        title: "Three problems we had to solve",
        body: "Our first designs looked like a natural evolution of the original. When we tested early, the feedback was consistent: \"This is exactly what we expected.\" But when we brought those designs to engineering, three problems emerged that changed everything.",
        image: "/images/projects/powershell-scanner-pdq/v1-powershell-page.webp",
        imageSize: "full",
        blocks: [
          {
            type: "list",
            items: [
              "It required PowerShell knowledge, and in Connect, mistakes had real consequences. A bad script could run across an entire fleet with no guardrails.",
              "Scripts could run unconstrained. One heavy scan across thousands of devices could slow the system for everyone and spike infrastructure costs.",
              "The output was unpredictable. If data types were assigned incorrectly, users couldn't filter or act on their data, and would likely give up on the scanner entirely.",
            ],
          },
          {
            type: "text",
            content: "To make it even more interesting: we had two weeks to solve all of this before engineering needed to start building.",
          },
        ],
      },
      {
        title: "I had to become the user",
        body: "To design for someone who doesn't know PowerShell, I needed to not know it first. So before any mockups, I learned the foundations: how it works, how people use it, and where beginners get stuck. I documented what confused me, what clicked, and where things finally made sense. That turned into a beginner's guide I shared with the team. It shaped every design decision I made after that.",
        blocks: [
          {
            type: "expandable",
            label: "PowerShell: The Ultimate Beginner's Guide",
            sections: [
              {
                heading: "What is PowerShell?",
                items: [
                  "A command-line tool for controlling and automating your computer",
                  "Commands replace clicking, making them faster, repeatable, and scriptable",
                ],
              },
              {
                heading: "4 Types of Commands",
                items: [
                  "Cmdlets: built-in commands that follow the Verb-Noun pattern (Get-Process, Stop-Service)",
                  "Functions: custom reusable commands you define once and call anytime",
                  "Scripts (.ps1): files containing multiple commands that run in sequence",
                  "Native Commands: standard Windows commands PowerShell can also run (ipconfig, ping, tasklist)",
                ],
              },
              {
                heading: "PowerShell Modules",
                items: [
                  "Modules are toolboxes of pre-built commands for specific domains",
                  "Common modules: Active Directory, Azure (Az), Windows Update (PSWindowsUpdate)",
                  "Types: Manifest (.psd1), Script (.psm1), Binary (.dll), Dynamic, CIM, Resource",
                ],
              },
              {
                heading: "Key Concepts Every Admin Needs",
                items: [
                  "Variables ($name): storage boxes for values you want to reuse",
                  "Pipelines (|): pass the output of one command directly into the next",
                  "Loops (for, foreach, while): repeat actions across multiple items or computers",
                  "Conditionals (if/else): make decisions inside a script based on current state",
                  "Error Handling (try/catch): catch failures gracefully so scripts don't crash mid-run",
                  "Execution Policy: security setting that controls which scripts are allowed to run",
                  "Aliases: shortcuts for common commands (ls = Get-ChildItem, rm = Remove-Item)",
                ],
              },
              {
                heading: "Classes & Objects",
                items: [
                  "Classes let you structure data with properties (data) and methods (actions)",
                  "Useful for storing employee records, device info, or event logs in a consistent format",
                  "Objects help scripts process and organize data more efficiently than plain text",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Going straight to the source",
        body: "I reached out to the same community that had been asking for this feature for years. Within two weeks I scheduled over 7 calls. Since I didn't have prototypes yet, their feedback helped me iterate for the next call. They were the right people to pressure-test it. They knew the old scanner inside and out, and they weren't shy about telling us when something felt off.",
        image: "/images/projects/powershell-scanner-pdq/discord-outreach.webp",
        image2: "/images/projects/powershell-scanner-pdq/discord-comment-3.webp",
        imageSize: "sm",
      },
      {
        title: "Making PowerShell approachable",
        body: "A blank code editor is intimidating if you've never written a script before. I built two things into the UI to close that gap.",
        image: "/images/projects/powershell-scanner-pdq/final-powershell-page.webp",
        imageSize: "full",
        blocks: [
          {
            type: "list",
            items: [
              "Placeholder text inside the editor showing exactly what format the script output needed to be in, so admins had a working example from day one",
              "A full code editor instead of a plain input field, with syntax highlighting and real-time error feedback so admins could catch mistakes as they typed, not after running on hundreds of devices",
            ],
          },
        ],
      },
      {
        title: "Making sense of infinite output",
        body: "The original scanner output whatever structure the user gave it, right or wrong. That worked on desktop where admins managed their own data. In Connect, filters and automations need typed, predictable data to function. So after testing on one device, admins assign a data type to each column their script returns: String, Integer, Float, Boolean, Date.\n\nWe were worried users would see this as extra friction. Instead, it became one of the most praised parts of the design, and more than a few people said they wished D&I had it.",
        image: "/images/projects/powershell-scanner-pdq/final-powershell-page.webp",
        image2: "/images/projects/powershell-scanner-pdq/final-draft-modal.webp",
        imageSize: "full",
      },
      {
        title: "Scanners as a fleet superpower",
        body: "The 3-step workflow solved the system strain problem too. Scripts don't run fleet-wide until the admin confirms the output looks right on one device first, eliminating the risk of a bad script taking down infrastructure for everyone.\n\nOnce validated, scanner data becomes a filter condition and automation trigger across Connect. Check BitLocker status, group every at-risk device, deploy a fix, and automate it going forward. All from one scanner.",
        image: "/images/projects/powershell-scanner-pdq/final-filter-dropdown.webp",
        image2: "/images/projects/powershell-scanner-pdq/discord-comment-2.webp",
        imageSize: "sm",
        blocks: [
          {
            type: "link",
            text: "Try the Figma prototype",
            url: "https://www.figma.com/proto/PZrWAa8lOebnSHZRkaRUVw/Prototypes?page-id=0%3A1&node-id=172-47158&p=f&viewport=80%2C364%2C0.08&t=5bhOSKUzukzWI5W3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=172%3A47158",
          },
        ],
      },
    ],
  },
  {
    slug: "design-system-klas",
    title: "Design System",
    subtitle: "A design system worth $800,000",
    company: "KLAS Research",
    description:
      "Spearheaded the complete overhaul of the KLAS design system, rebuilding components for WCAG accessibility, implementing design tokens, and collaborating across departments to create a system estimated at $800,000 in developer and designer time saved.",
    role: "Lead UI Designer",
    timeline: "2023–2024",
    team: "Solo designer",
    tools: [],
    thumbnail: "/images/projects/design-system-klas/thumbnail.webp",
    color: "#F59E0B",
    summary:
      "I spearheaded the project to completely overhaul the KLAS design system. This included recreating components and processes to be WCAG accessible, collaborating with multiple departments to plan for use cases, and creating a naming structure with design tokens for easy implementation. By the end of the project, the system was estimated to be worth $800,000 after calculating the time saved by developers and designers.",
    challenge:
      "Developers were breaking the site every sprint just to fix it. Bug fixes crowded the backlog, innovation stalled, and researchers had to navigate 34 error states just to submit their work. Nobody had a plan to get out.",
    solution:
      "Starting from an accessibility audit and self-directed learning, I rebuilt the design system from the ground up, consolidating components, creating a design token architecture connected to Azure DevOps, and documenting everything with proper use, misuse, and accessibility standards.",
    testimonial: {
      text: "Stone is a rockstar, I know how much work this takes!",
      author: "Jessica Wallace Simpson, Art Manager, KLAS Research",
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
        title: "Developers were playing whack-a-mole",
        body: "Imagine if every time you wanted to change something, on the website, you had to break another part of it. That was the developer's reality every sprint. Because of this, the company went further into technical debt. The backlog was cluttered with bug fixes, innovation was sidelined, and users were frustrated.",
      },
      {
        title: "What did this mean for the business?",
        body: "A fragile frontend had real downstream consequences — not just for the dev team, but for the business.",
        blocks: [
          {
            type: "list",
            items: [
              "KLAS users were making 10+ million dollar decisions on the platform. An inaccessible experience created real legal liability.",
              "Developers were working overtime every sprint, as bug fixes kept getting prioritized over new features.",
              "Clients bypassed the website entirely and called managers directly, creating bottlenecks and straining client relationships.",
            ],
          },
        ],
      },
      {
        title: "KLAS didn't have the resources for a team, so I did it myself",
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
        body: "The results of my audits made one thing clear: I needed to become an expert in accessibility before making any major changes. I read books, took courses, and studied WCAG standards. By the end of my self-directed boot camp, I was recognized as an accessibility expert by UXCEL, scoring in the top 10%.",
        image: "/images/projects/design-system-klas/accessibility-certificate.webp",
      },
      {
        title: "Re-designing the components",
        body: "The existing design system had more components than KLAS needed, confusing designers and creating inconsistencies we couldn't afford. All that clutter was also a problem for developers. Manually coding each component meant projects took longer than estimated. I needed to show the team that less is more. A simpler design system would create a better user experience across the board.",
        video: "/videos/design-system-klas/redesigning-components.mp4",
      },
      {
        title: "Simplifying data visualizations",
        body: "Users were frustrated because data visualizations had too many colors and data points, making them hard to read. Best practice calls for no more than 6 data points on a graph, but KLAS frequently had up to 12. I collaborated with multiple teams to build a color palette that was:",
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
        body: "Several of KLAS's bugs stemmed from developers manually coding each component, opening the door for errors every time something was deployed. I created a naming structure and implemented design tokens used for every component in the system, then worked with developers to connect those tokens to Azure DevOps for easy implementation.",
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
        body: "The redesign didn't just fix bugs — it changed how the team worked and what they were able to build.",
        beforeVideo: "/videos/design-system-klas/before.mp4",
        afterVideo: "/videos/design-system-klas/after.mp4",
        blocks: [
          {
            type: "list",
            items: [
              "Complete accessibility: KLAS now has a fully accessible design system, letting designers work confidently and reducing legal liability.",
              "Made headway on technical debt: developers could finally focus on innovation instead of sprint after sprint of bug fixes.",
              "Created respect for design company-wide: collaborative sessions with multiple departments turned the design team into a real resource.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "voc-agent",
    complete: false,
    title: "AI Projects",
    heroTitle: "My Projects",
    subtitle: "Shipping AI tools, not just talking about them.",
    company: "PDQ.com / Personal",
    description:
      "A snapshot of the AI tools I've shipped at PDQ, what I'm building next, and where I see it all going.",
    role: "",
    timeline: "",
    team: "",
    processLabel: { eyebrow: "What I'm Building", heading: "Some of what I'm building" },
    tools: [],
    thumbnail: "/images/projects/ai-projects/thumbnail.webp",
    color: "#A855F7",
    challenge:
      "Good AI ideas are everywhere. The harder problem is building AI tools that actually change how work gets done — tools reliable enough to trust, specific enough to be useful, and simple enough that people actually use them.",
    solution:
      "I've been building AI tools at PDQ and on my own time: automations that process real data at scale, GPTs trained on competitive intelligence, and a growing system for using AI agents to accelerate product development itself.",
    results: [
      {
        label: "estimated time saved per quarter across all tools",
        value: "7+ weeks",
        description: "6 weeks from automating feedback processing with the VoC agent, plus 1 week from on-demand competitive research.",
      },
    ],
    sections: [
      {
        title: "Voice of the Customer, at scale",
        body: "PDQ collects customer feedback across call transcripts, help desk tickets, NPS surveys, and more — but that data was scattered, inconsistent, and too noisy to act on at scale. I built an AI agent that automatically ingests all of it, filters out noise, extracts valid feedback, and categorizes it by theme and product area. The next step is surfacing that as a living knowledge base any employee can tap into for research or roadmap planning, without reading a single raw ticket.",
        image: "/images/projects/ai-projects/voc-evaluation.webp",
        imageSize: "full",
        blocks: [
          { type: "stat", value: "6 weeks", label: "of manual work saved every quarter" },
        ],
      },
      {
        title: "A GPT that never stops watching the competition",
        body: "Describe the problem you're solving and the Jobs to be Done you're designing for, and this GPT does the rest. It scrapes competitor documentation, social media, and other relevant sources, then surfaces screenshots and pertinent information you can pull directly into your research. No more manually hunting through five different products to figure out what the market is doing.",
        image: "/images/projects/ai-projects/competitors-documentation.webp",
        imageSize: "full",
        blocks: [
          { type: "stat", value: "1 week", label: "of research compressed into minutes" },
        ],
      },
      {
        title: "Vibe coding a proof of concept at PDQ",
        body: "I wanted to know if vibe coding could produce something real — not a toy, but a working proof of concept worth showing. The result: a managed software center that installs software on a device, scans to confirm it's there, and logs each deployment stage in a working mockup of PDQ Connect. It ran in a local environment, but the loop was complete: deploy, verify, report. The next step is connecting it to an AI agent that can make deployment decisions autonomously.",
        image: "/images/projects/ai-projects/managed-software-center.webp",
        imageSize: "full",
        blocks: [
          { type: "stat", value: "Months", label: "of traditional dev time saved on a working POC" },
        ],
      },
      {
        title: "After that: a tournament platform I've been building for a year",
        body: "I've spent a year designing a tournament management platform for combat sports — think Flow Wrestling or Trackwrestling, but built for the modern era. Bracket management, registration, live scoring, athlete profiles. I have the design. Vibe coding is the mechanism I plan to use to bring the full product to life.",
        image: "/images/projects/ai-projects/mat-master.webp",
        imageSize: "full",
        blocks: [],
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
    team: "Solo Designer",
    tools: [],
    thumbnail: "/images/projects/web-design-cvma/thumbnail.webp",
    color: "#10B981",
    summary:
      "Cache Valley Martial Arts is a gym where I trained for several years. I created a new website, optimized their SEO, developed brand standards, and delivered a marketing campaign. By the end of the project, we saw web traffic increase by 24% and CVMA became ranked #1 on Google for gyms in the area.",
    challenge:
      "CVMA had world-class coaches (World team members, Gold Glove winners, and black belts), but their outdated website and absent brand strategy were keeping them a secret in Logan, UT. They wanted to grow their customer base and expand their semi-pro fighting team.",
    solution:
      "Rebuilt the website with clear information architecture, developed a confident brand voice, optimized for local SEO, and delivered a full marketing plan aimed at attracting students and families to a gym they might have otherwise overlooked.",
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
          "Among fighting gyms in Logan, UT & Southern Idaho, driven by targeted local SEO and increased web traffic.",
      },
      {
        label: "Coach went full-time",
        value: "1",
        description:
          "Full classes and multiple champions; more coaches had to be brought in to accommodate the rise in students.",
      },
    ],
    sections: [
      {
        title: "Undiscovered",
        body: "CVMA is full of some of the best coaches Utah has to offer. World team members, Gold Glove winners, and black belts could be found on their staff. CVMA wanted to take the next step to increase its customer base and grow its semi-pro fighting team.",
        image: "/images/projects/web-design-cvma/gym-wall-punching-bag.webp",
      },
      {
        title: "A local gym with world level talent",
        body: "Have you ever been secretly good at something and it was fun to keep it on the down low? Well, CVMA was great at what they did and was tired of being kept secret. The problem was that CVMA is in Logan, UT, a city usually flooded with seasonal, broke college students. CVMA needed to switch its brand and marketing strategy to attract its real target audience: students and families.",
        image: "/images/projects/web-design-cvma/gym-winning-medal.webp",
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
        image: "/images/projects/web-design-cvma/webpage-hero-section.webp",
        image2: "/images/projects/web-design-cvma/coaches-intro-web-section.webp",
      },
      {
        title: "Choosing a font and voice",
        body: "CVMA's voice needed to be friendly and inviting but sound confident and full of authority, to encourage students and families to try something new while reinforcing that CVMA staff were trained professionals. I chose \"Impact\" as the header font paired with \"din-next\" as the body font to emphasize boldness and authority. The language on the website changed from wishy-washy to definite and inviting. For example: \"Safety is a top priority\" became \"Your child will be safe.\"",
        image: "/images/projects/web-design-cvma/martial-art-style-web-section.webp",
      },
      {
        title: "Getting ranked #1",
        body: "A new website and brand can only get you so far if people can't find you. It was important to research the trending keywords in the area that would get CVMA to the top of Google listings. Some of the top keywords implemented into content and page descriptions were:",
        image: "/images/projects/web-design-cvma/google-listing.webp",
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
        image: "/images/projects/web-design-cvma/online-booking-web-section.webp",
      },
      {
        title: "Marketing plan",
        body: "As the sole designer, I created an in-depth marketing plan for CVMA. Equipped with a new website, brand, and SEO, a marketing plan was the last thing CVMA needed to succeed. This plan included an estimated budget, measurements of success, examples, and clear instructions on the type of content needed to attract their target audience.",
        image: "/images/projects/web-design-cvma/social-media-images.webp",
      },
    ],
  },
];
