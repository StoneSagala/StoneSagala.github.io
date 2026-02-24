export type ToolCategory = "All" | "Design" | "Research" | "Analytics" | "PM" | "Web" | "AI" | "Frameworks";

export interface Tool {
  name: string;
  category: Exclude<ToolCategory, "All">;
  /** Key from simple-icons (e.g. "siFigma") */
  iconKey?: string;
  /** For tools not in simple-icons */
  customIcon?: "chatgpt" | "grain" | "useberry" | "figjam" | "tray" | "agile" | "ooux";
}

export const tools: Tool[] = [
  // Design
  { name: "Figma",   category: "Design", iconKey: "siFigma" },
  { name: "FigJam",  category: "Design", customIcon: "figjam" },

  // Research
  { name: "Useberry",  category: "Research", customIcon: "useberry" },
  { name: "Grain",     category: "Research", customIcon: "grain" },
  { name: "Dovetail",  category: "Research", iconKey: "siDovetail" },
  { name: "HubSpot",   category: "Research", iconKey: "siHubspot" },

  // Analytics
  { name: "Mixpanel",         category: "Analytics", iconKey: "siMixpanel" },
  { name: "Google Analytics", category: "Analytics", iconKey: "siGoogleanalytics" },

  // PM
  { name: "Notion",     category: "PM", iconKey: "siNotion" },
  { name: "Jira",       category: "PM", iconKey: "siJira" },
  { name: "Confluence", category: "PM", iconKey: "siConfluence" },
  { name: "Linear",     category: "PM", iconKey: "siLinear" },
  { name: "Loom",       category: "PM", iconKey: "siLoom" },

  // Web
  { name: "Framer",    category: "Web", iconKey: "siFramer" },
  { name: "WordPress", category: "Web", iconKey: "siWordpress" },

  // AI & Agents
  { name: "Claude",   category: "AI", iconKey: "siClaude" },
  { name: "ChatGPT",  category: "AI", customIcon: "chatgpt" },
  { name: "N8N",      category: "AI", iconKey: "siN8n" },
  { name: "Tray.ai",  category: "AI", customIcon: "tray" },

  // Frameworks
  { name: "Agile",  category: "Frameworks", customIcon: "agile" },
  { name: "OOUX",   category: "Frameworks", customIcon: "ooux" },
];

export const categoryColors: Record<Exclude<ToolCategory, "All">, string> = {
  Design:     "#4F7BF7",
  Research:   "#10B981",
  Analytics:  "#EF4444",
  PM:         "#8B5CF6",
  Web:        "#06B6D4",
  AI:         "#FF9933",
  Frameworks: "#EC4899",
};

/** Display labels — allows internal keys to differ from visible text */
export const categoryLabels: Record<ToolCategory, string> = {
  All:        "All",
  Design:     "Design",
  Research:   "Research",
  Analytics:  "Analytics",
  PM:         "PM",
  Web:        "Web",
  AI:         "AI & Agents",
  Frameworks: "Frameworks",
};

export const categories: ToolCategory[] = [
  "All", "Design", "AI", "Research", "PM", "Analytics", "Web", "Frameworks",
];
