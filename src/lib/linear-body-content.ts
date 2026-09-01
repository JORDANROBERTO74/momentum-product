export const linearBodyContent = {
  intro: {
    title: "A new species of product tool.",
    subtitle:
      "Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building products.",
    principles: [
      {
        art: "stack" as const,
        title: "Purpose-built",
        description:
          "Linear is shaped by the practices and principles of world-class product teams.",
      },
      {
        art: "blocks" as const,
        title: "Powered by agents",
        description:
          "Designed for workflows shared by humans and agents, from PRD to PR.",
      },
      {
        art: "stairs" as const,
        title: "Designed for speed",
        description:
          "Reduces noise and restores momentum to help teams ship with high velocity and focus.",
      },
    ],
  },
  intake: {
    title: ["Intake", "and integrations"],
    copy: "Automatically turn conversations and customer feedback into actionable issues that are instantly routed, labeled, and prioritized for the right team.",
    links: ["Linear Agent", "Triage", "Customer Requests", "Linear Asks"],
  },
  planning: {
    title: ["Planning", "and monitoring"],
    copy: "Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.",
    links: [
      "Projects",
      "Pulse",
      "Visual planning",
      "Documents",
      "Initiatives",
      "Insights",
    ],
  },
  ai: {
    title: ["AI and", "automations"],
    copy: "Build and deploy AI agents that work alongside you as teammates. Work on complex tasks together or delegate entire issues end-to-end.",
    links: ["Linear Agent", "Triage", "Coding sessions", "Linear MCP"],
  },
  build: {
    title: ["Build, review,", "and ship"],
    copy: "Streamline code reviews with clear diffs, better context, and fewer back-and-forth comments. Keep PRs moving without sacrificing quality.",
    links: [
      "Issues",
      "Guided reviews",
      "Diffs",
      "Git automations",
      "Cycles",
      "Releases",
    ],
  },
  changelog: {
    title: "Changelog",
    cta: "View all →",
    entries: [
      {
        title: "Coding sessions",
        description:
          "Linear Agent can now set up, run, and test your code before returning its work. That means fewer handoffs and changes that are further along when they come back to you.",
        date: "AUG 19, 2026",
      },
      {
        title: "Team initiatives",
        description:
          "Initiatives are Linear's way to manage product strategy and high-level planning across projects. You can now assign a team to lead an initiative.",
        date: "AUG 13, 2026",
      },
      {
        title: "Coding sessions on mobile",
        description:
          "Your coding session doesn't have to stop when you leave your desk. Use the Linear mobile app to review code changes.",
        date: "JUL 30, 2026",
      },
      {
        title: "Agent-assisted text editing",
        description:
          "Documents and project descriptions are critical context for your teams and agents.",
        date: "JUL 22, 2026",
      },
    ],
  },
  testimonials: {
    items: [
      {
        quote:
          "You'll probably build a better product, just because of the craft that using Linear infuses on your brain.",
        author: "Gabriel Peal",
        role: "Staff Software Engineer, OpenAI",
        company: "OpenAI",
        variant: "lavender" as const,
      },
      {
        quote:
          "Our speed is intense and Linear helps us be action biased.",
        author: "Nik Koblov",
        role: "Head of Engineering, Ramp",
        company: "Ramp",
        variant: "yellow" as const,
      },
    ],
    socialProof:
      "Linear powers over 40,000 product teams. From ambitious startups to major enterprises.",
    customerStoriesCta: "Customer stories →",
  },
  closing: {
    eyebrow: "BUILT FOR MOMENTUM",
    headline: "Make product development",
    headlineMuted: "feel effortless.",
    actions: [
      { label: "Get started", variant: "primary" as const },
      { label: "Contact sales", variant: "secondary" as const },
    ],
  },
} as const;
