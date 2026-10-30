import { assets } from "./assets";

export const navLinks = {
  primary: [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#features" },
    { label: "Customers", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#features" },
    { label: "Contact", href: "#contact" },
  ],
  actions: [
    { label: "Log in", href: "#", variant: "ghost" as const },
    { label: "Sign up", href: "#", variant: "primary" as const },
  ],
};

export const hero = {
  badge: { label: "New", text: "Agent sessions" },
  headline: "Product work, without the handoffs.",
  subheadline:
    "Momentum keeps intake, planning, review and release in one shared context for teams and agents.",
  previewImage: "/media/asset-001.png",
};

export const logoCloud = {
  caption: "Teams building with Momentum",
  logos: assets.logos,
};

export const featureIntro = {
  title: "One place for the work.",
  subtitle:
    "Momentum connects the moments where product work usually gets lost: intake, prioritisation, review and release.",
  features: [
    {
      title: "Shared context",
      description:
        "Decisions, documents and issues stay connected to the work they belong to.",
      image: assets.featureIntro[0],
    },
    {
      title: "Agent-ready",
      description:
        "Agents pick up scoped work with the same context as the people around them.",
      image: assets.featureIntro[1],
    },
    {
      title: "Built for speed",
      description:
        "Keyboard-first flows and quiet defaults keep the team moving without noise.",
      image: assets.featureIntro[2],
    },
  ],
};

export const intakeSection = {
  eyebrow: "Intake and integrations",
  title: "Intake\nand integrations",
  description:
    "Move fast without losing the human touch or visibility into progress. Automatically turn conversations and customer feedback into actionable issues.",
  cta: "Learn more →",
  features: [
    "Momentum Inbox +",
    "Customer Requests +",
    "Triage +",
    "Routing +",
  ],
  slackThread: [
    { user: "didier", text: "Has anyone been looking into the iOS startup performance issues?" },
    { user: "lena", text: "Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?" },
    { user: "didier", text: "Yea, we're still waiting for every panel before rendering the workspace every time…" },
    { user: "andreas", text: "Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often this happens!" },
    { user: "andreas", text: "@Momentum create issues and assign to me", highlight: true },
  ],
  columns: [
    {
      name: "Backlog",
      count: 8,
      issues: [
        { id: "ENG-2085", title: "Reduce UI flicker during autonomy...", labels: [] },
        { id: "ENG-2094", title: "Add buffering for autonomy event streams", labels: [] },
        { id: "ENG-2092", title: "Reduce startup delay caused by vehicle sync", labels: [] },
        { id: "ENG-2200", title: "Fix delayed route updates during rerouting", labels: [] },
      ],
    },
    {
      name: "Todo",
      count: 71,
      issues: [
        { id: "ENG-926", title: "Remove UI inconsistencies", labels: ["Bug", "Design"] },
        { id: "ENG-2088", title: "TypeError: Cannot read properties", labels: ["Bug"] },
        { id: "ENG-924", title: "Upgrade the agent model", labels: ["AI"] },
        { id: "ENG-1882", title: "Optimize load times", labels: ["Performance"] },
      ],
    },
    {
      name: "In Progress",
      count: 3,
      issues: [
        { id: "ENG-1487", title: "Remove contentData from GraphQL API", labels: ["61039"] },
        { id: "MKT-1028", title: "Launch page assets", labels: ["Design"] },
        { id: "ENG-2187", title: "Prevent duplicate ride requests on poor...", labels: ["Bug", "62048"] },
      ],
    },
    {
      name: "Done",
      count: 53,
      issues: [
        { id: "ENG-2074", title: "Clean up deprecated APIs...", labels: ["API", "61002"] },
        { id: "ENG-1912", title: "Reduce latency in autonomy st...", labels: ["61005"] },
        { id: "ENG-1951", title: "Reduce ETA fluctuations durin...", labels: ["61202"] },
      ],
    },
  ],
};

export const planningSection = {
  eyebrow: "Planning and monitoring",
  title: "Planning\nand monitoring",
  description:
    "Set the course, then stay on it. Build momentum with roadmaps, milestones, and automated workflows.",
  cta: "Learn more →",
  features: [
    "Projects +",
    "Documents +",
    "Pulse +",
    "Initiatives +",
    "Visual planning +",
    "Insights +",
  ],
  initiatives: [
    { name: "Onboarding refresh", start: "MAR", end: "JUN" },
    { name: "Shared planning", start: "APR", end: "AUG", sub: ["Internal", "Public Beta"] },
    { name: "Agent review queue", start: "MAY", end: "SEP", sub: ["Alpha"] },
    { name: "Release automation", start: "JUN", end: "OCT", sub: ["Beta", "GA"] },
  ],
};

export const aiSection = {
  eyebrow: "AI and automations",
  title: "AI and\nautomations",
  description:
    "Built for speed. Programmatic flows, AI automation and high quality defaults that make you move faster.",
  cta: "Learn more →",
  features: [
    "Momentum Agent +",
    "Agent sessions +",
    "Triage +",
    "Automations +",
  ],
  chats: [
    {
      user: "You",
      prompt: "what are the three most important customer requests around permissions? add them to the Access Controls project",
      agent: "Momentum Agent",
      response: "Three issues ranked by customer impact:\nENG-2298 Add granular project permissions\nENG-2647 Let guests access multiple teams\nENG-2352 Create custom roles with scoped access\nI've added them to Access Controls",
      duration: "Worked for 8 sec",
    },
    {
      user: "Studio",
      prompt: "add retry handling for failed image uploads described in this issue",
      context: "ENG-2844 added to context",
    },
    {
      user: "Spec",
      prompt: "review this issue, draft complete offline mode requirements, and break the work into sub-issues",
      context: "ENG-2521 added to context",
      duration: "Worked for 1 min",
      response: "Updated the issue with requirements, open product decisions, and acceptance criteria.\nENG-2920 Define offline mode requirements",
    },
  ],
};

export const buildSection = {
  eyebrow: "Build, review, and ship",
  title: "Build, review,\nand ship",
  description:
    "A new way to build. Integrate code into your product workflow and ship high-quality products without the friction.",
  cta: "Learn more →",
  features: [
    "Issues +",
    "Git automations +",
    "Guided reviews +",
    "Cycles +",
    "Diffs +",
    "Releases +",
  ],
  reviewColumns: [
    {
      name: "In Review",
      count: 3,
      issues: [
        { id: "ENG-2498", title: "Replace isFullySynced with a sync status", pr: "#54910", labels: ["iOS", "Oct 9"] },
        { id: "ENG-2380", title: "Show a stale data banner while syncing", pr: "#55167", labels: ["Reliability", "Oct 9"] },
        { id: "ENG-2039", title: "Pass sync status to the dashboard", pr: "#55209", labels: ["Bug", "Reliability", "Oct 8"] },
      ],
    },
    {
      name: "In Progress",
      count: 4,
      issues: [
        { id: "ENG-2076", title: "Reduce queue jitter", pr: "#55423", labels: ["Performance", "Working…", "Oct 6"] },
        { id: "ENG-2108", title: "Handle offline drafts gracefully", pr: "#55409", labels: ["Sync", "Working…", "Oct 2"] },
      ],
    },
    {
      name: "Todo",
      count: 4,
      issues: [
        { id: "ENG-2254", title: "Reduce unnecessary list re-rendering on the home screen", labels: ["Web", "Oct 10"] },
        { id: "ENG-2291", title: "Clean up deprecated APIs used by the mobile app", labels: ["API", "Oct 9"] },
      ],
    },
  ],
  codeDiff: {
    file: "momentum-app/src/screens/Home/HomeScreen.tsx",
    before: `if (!isFullySynced) {
  return <ActivityIndicator size="large" />
}`,
    after: `if (syncStatus === SyncStatus.PENDING) {
  return <ActivityIndicator size="large" />
}`,
  },
};

export const changelog = {
  title: "Changelog",
  cta: "View all →",
  entries: [
    {
      title: "Coding sessions",
      description:
        "Momentum Agent can now set up, run, and test your code before returning its work. That means fewer handoffs and changes that are further along when they come back to you.",
      image: assets.changelog[0],
    },
    {
      title: "Team initiatives",
      description:
        "Initiatives are Momentum's way to manage product strategy and high-level planning across projects. You can now assign a team to lead an initiative.",
      image: assets.changelog[1],
    },
    {
      title: "Coding sessions on mobile",
      description:
        "Your coding session doesn't have to stop when you leave your desk. Use the Momentum mobile app to review code changes.",
      image: assets.changelog[2],
    },
    {
      title: "Agent-assisted text editing",
      description:
        "Documents and project descriptions are critical context for your teams and agents.",
      image: assets.changelog[3],
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Momentum gives our team one place to decide, build and ship. The agents feel like another teammate, not another tool.",
    author: "Elena Márquez",
    role: "Head of Product, Northline",
    variant: "lavender" as const,
    logo: assets.testimonialLogos[0],
  },
  {
    quote:
      "We stopped chasing status. The work, the context and the review all live in the same place.",
    author: "Tomás Ferreira",
    role: "Engineering Lead, Arco Labs",
    variant: "yellow" as const,
    logo: assets.testimonialLogos[1],
  },
];

export const finalCta = {
  title: "Built for teams that ship.",
  actions: [
    { label: "Start now", href: "#", primary: true },
    { label: "Contact sales", href: "#", primary: false },
  ],
};

export const footer = {
  columns: [
    {
      title: "Product",
      links: ["Intake", "Plan", "AI", "Build", "Pricing", "Security"],
    },
    {
      title: "Features",
      links: [
        "Asks",
        "Agents",
        "Coding Sessions",
        "Customer Requests",
        "Insights",
        "Mobile",
        "Integrations",
        "Changelog",
      ],
    },
    {
      title: "Company",
      links: ["About", "Customers", "Careers", "Now", "Method", "Quality", "Brand"],
    },
    {
      title: "Resources",
      links: ["Switch", "Download", "Documentation", "Developers", "Status", "Enterprise", "Startups"],
    },
    {
      title: "Connect",
      links: ["Contact us", "Community", "Updates", "Documentation"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "DPA", "AUP"],
    },
  ],
  legal: ["Privacy", "Terms", "DPA", "AUP"],
};

export const heroIssue = {
  id: "MOM-8852",
  title: "Faster workspace load",
  progress: "1 / 84",
  description:
    "Render the workspace before the full activity sync when the minimum state is available, instead of blocking on a complete refresh.",
  activity: [
    { actor: "Momentum", text: "created the issue from a customer request", time: "2min ago" },
    { actor: "Triage Intelligence", text: "added the labels Performance and Web", time: "2min ago" },
    { actor: "maya", text: "We show a spinner until every panel is ready, which makes the workspace feel slower than it is.", time: "4 min ago" },
    { actor: "jori", text: "@Momentum can you take a stab at this?", time: "just now" },
    { actor: "Momentum", text: "Changed 2 files · Draft PR awaiting your review", time: "2 min ago" },
  ],
  properties: {
    status: "In Progress",
    priority: "Medium",
    assignee: "Maya",
    cycle: "Cycle 12",
    labels: ["Performance", "Web"],
  },
};
