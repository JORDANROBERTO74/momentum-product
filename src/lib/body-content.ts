export const bodyContent = {
  intro: {
    title: "Product work, without the handoffs.",
    subtitle:
      "Momentum keeps intake, planning, review and release in one shared context, so product teams and AI agents can move the same work forward.",
    principles: [
      {
        art: "stack" as const,
        title: "Shared context",
        description:
          "Every decision, document and issue lives where the work happens.",
      },
      {
        art: "blocks" as const,
        title: "Agents on the team",
        description:
          "Agents pick up scoped work with the same context as the people around them.",
      },
      {
        art: "stairs" as const,
        title: "Built for momentum",
        description:
          "Less status chasing, fewer handoffs and a clear path from idea to release.",
      },
    ],
  },
  intake: {
    title: ["Intake", "and triage"],
    copy: "Turn customer conversations, support threads and internal notes into scoped work that reaches the right team with the context attached.",
    links: ["Momentum Inbox", "Triage", "Customer Requests", "Routing"],
  },
  planning: {
    title: ["Planning", "and monitoring"],
    copy: "Shape the roadmap, keep priorities visible and track progress without another status meeting.",
    links: [
      "Projects",
      "Roadmaps",
      "Documents",
      "Initiatives",
      "Insights",
      "Timelines",
    ],
  },
  ai: {
    title: ["Agents and", "automations"],
    copy: "Give agents a scoped task, the product context and a clear definition of done. Review their work like any teammate's.",
    links: ["Momentum Agent", "Agent sessions", "Review queue", "Automations"],
  },
  build: {
    title: ["Build, review,", "and ship"],
    copy: "Keep code review close to the work. Diffs, context and approvals stay attached to the issue that started them.",
    links: [
      "Issues",
      "Reviews",
      "Diffs",
      "Release notes",
      "Cycles",
      "Git automations",
    ],
  },
  changelog: {
    title: "Changelog",
    cta: "View all →",
    entries: [
      {
        title: "Agent sessions",
        description:
          "Agents can pick up a scoped issue, work through it and return a reviewable result without leaving the project.",
        date: "AUG 19, 2026",
      },
      {
        title: "Shared planning",
        description:
          "Roadmaps and initiatives now share one timeline, so priorities stay visible across teams.",
        date: "AUG 13, 2026",
      },
      {
        title: "Review on mobile",
        description:
          "Approve a diff, leave a note or unblock a release from your phone.",
        date: "JUL 30, 2026",
      },
      {
        title: "Context-aware editing",
        description:
          "Documents and issue descriptions suggest the context your team already agreed on.",
        date: "JUL 22, 2026",
      },
    ],
  },
  testimonials: {
    items: [
      {
        quote:
          "Momentum gives our team one place to decide, build and ship. The agents feel like another teammate, not another tool.",
        author: "Elena Márquez",
        role: "Head of Product, Northline",
        company: "Northline",
        variant: "lavender" as const,
      },
      {
        quote:
          "We stopped chasing status. The work, the context and the review all live in the same place.",
        author: "Tomás Ferreira",
        role: "Engineering Lead, Arco Labs",
        company: "Arco Labs",
        variant: "yellow" as const,
      },
    ],
    socialProof:
      "Momentum is built for product teams that ship with agents, from early-stage squads to distributed platforms.",
    customerStoriesCta: "Customer stories →",
  },
  closing: {
    eyebrow: "BUILT FOR MOMENTUM",
    headline: "Keep product work",
    headlineMuted: "moving.",
    actions: [
      { label: "Get started", variant: "primary" as const },
      { label: "Contact sales", variant: "secondary" as const },
    ],
  },
} as const;
