import { linearAssets } from "./linear-assets";

export const navLinks = {
  primary: [
    { label: "Product", href: "#product" },
    { label: "Resources", href: "#features" },
    { label: "Customers", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "New", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  actions: [
    { label: "Log in", href: "#", variant: "ghost" as const },
    { label: "Sign up", href: "#", variant: "primary" as const },
  ],
};

export const hero = {
  badge: { label: "New", text: "Loops" },
  headline: "The product development system for teams and agents",
  subheadline:
    "Purpose-built for planning and building products. Designed for the AI era.",
  previewImage: "/linear/asset-001.png",
};

export const logoCloud = {
  caption: "Powering the companies building the future",
  logos: linearAssets.logos,
};

export const featureIntro = {
  title: "A new species of product tool.",
  subtitle:
    "Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building products.",
  features: [
    {
      title: "Foundation",
      description:
        "Linear is shaped by the practices and principles that distinguish world-class product teams from the rest.",
      image: linearAssets.featureIntro[0],
    },
    {
      title: "Intelligent sync",
      description:
        "Linear keeps everyone aligned and working in real-time. No matter when or where team members log in.",
      image: linearAssets.featureIntro[1],
    },
    {
      title: "Global control",
      description:
        "Command menus, keyboard shortcuts, and automations keep you in the flow and doing your best work.",
      image: linearAssets.featureIntro[2],
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
    "Linear Agent +",
    "Customer Requests +",
    "Triage +",
    "Linear Asks +",
  ],
  slackThread: [
    { user: "didier", text: "Has anyone been looking into the iOS startup performance issues?" },
    { user: "lena", text: "Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?" },
    { user: "didier", text: "Yea, we're still blocking initial render on a full vehicle_state sync every time…" },
    { user: "andreas", text: "Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often this happens!" },
    { user: "andreas", text: "@Linear create issues and assign to me", highlight: true },
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
        { id: "ENG-924", title: "Upgrade to Claude Opus 5", labels: ["AI"] },
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
    { name: "UI Refresh", start: "MAR", end: "JUN" },
    { name: "Split fares", start: "APR", end: "AUG", sub: ["Internal", "Public Beta"] },
    { name: "Autonomy status clarity", start: "MAY", end: "SEP", sub: ["Alpha"] },
    { name: "Autonomy telemetry reliability", start: "JUN", end: "OCT", sub: ["Beta", "GA"] },
  ],
};

export const aiSection = {
  eyebrow: "AI and automations",
  title: "AI and\nautomations",
  description:
    "Built for speed. Programmatic flows, AI automation and high quality defaults that make you move faster.",
  cta: "Learn more →",
  features: [
    "Linear Agent +",
    "Coding sessions +",
    "Triage +",
    "Linear MCP +",
  ],
  chats: [
    {
      user: "You",
      prompt: "what are the three most important customer requests around permissions? add them to the Access Controls project",
      agent: "Linear Opus 5",
      response: "Three issues ranked by customer impact:\nENG-2298 Add granular project permissions\nENG-2647 Let guests access multiple teams\nENG-2352 Create custom roles with scoped access\nI've added them to Access Controls",
      duration: "Worked for 8 sec",
    },
    {
      user: "Cursor",
      prompt: "add retry handling for failed image uploads described in this issue",
      context: "ENG-2844 added to context",
    },
    {
      user: "ChatPRD",
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
        { id: "ENG-2076", title: "Reduce ETA jitter", pr: "#55423", labels: ["Performance", "Working…", "Oct 6"] },
        { id: "ENG-2108", title: "Handle GPS dropouts gracefully", pr: "#55409", labels: ["Maps", "Working…", "Oct 2"] },
      ],
    },
    {
      name: "Todo",
      count: 4,
      issues: [
        { id: "ENG-2254", title: "Reduce unnecessary map re-rendering on home screen", labels: ["Maps", "Oct 10"] },
        { id: "ENG-2291", title: "Clean up deprecated APIs used by the rider app", labels: ["API", "Oct 9"] },
      ],
    },
  ],
  codeDiff: {
    file: "kinetic-ios/src/screens/Home/HomeScreen.tsx",
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
        "Linear Agent can now set up, run, and test your code before returning its work. That means fewer handoffs and changes that are further along when they come back to you.",
      image: linearAssets.changelog[0],
    },
    {
      title: "Team initiatives",
      description:
        "Initiatives are Linear's way to manage product strategy and high-level planning across projects. You can now assign a team to lead an initiative.",
      image: linearAssets.changelog[1],
    },
    {
      title: "Coding sessions on mobile",
      description:
        "Your coding session doesn't have to stop when you leave your desk. Use the Linear mobile app to review code changes.",
      image: linearAssets.changelog[2],
    },
    {
      title: "Agent-assisted text editing",
      description:
        "Documents and project descriptions are critical context for your teams and agents.",
      image: linearAssets.changelog[3],
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Linear is excellent, just excellent. It has the right opinions for fast moving teams. It helps us cut through the noise and focus on building.",
    author: "Jack Dorsey",
    role: "Block",
    variant: "lavender" as const,
    logo: linearAssets.testimonialLogos[0],
  },
  {
    quote:
      "You'll probably build a better product, just because of the craft that using Linear infuses on your brain.",
    author: "Gabriel Peal",
    role: "Staff Software Engineer, OpenAI",
    variant: "yellow" as const,
    logo: linearAssets.testimonialLogos[1],
  },
];

export const finalCta = {
  title: "Built for the future. Available today.",
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
      links: ["Contact us", "Community", "X (Twitter)", "GitHub", "YouTube"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "DPA", "AUP"],
    },
  ],
  legal: ["Privacy", "Terms", "DPA", "AUP"],
};

export const heroIssue = {
  id: "DRV-8852",
  title: "Faster app launch",
  progress: "1 / 84",
  description:
    "Render UI before `vehicle_state` sync when minimum required state is present, instead of blocking on full refresh during iOS startup.",
  activity: [
    { actor: "Linear", text: "created the issue via Slack on behalf of Karri", time: "2min ago" },
    { actor: "Triage Intelligence", text: "added the labels Performance and iOS", time: "2min ago" },
    { actor: "karri", text: "Right now we show a spinner forever, which makes it look like the car disappeared...", time: "4 min ago" },
    { actor: "jori", text: "@Linear can you take a stab at this?", time: "just now" },
    { actor: "Linear", text: "Changed 2 files · Draft PR awaiting your review", time: "2 min ago" },
  ],
  properties: {
    status: "In Progress",
    priority: "Medium",
    assignee: "Karri",
    cycle: "Cycle 144",
    labels: ["Performance", "iOS"],
  },
};
