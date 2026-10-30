export const layout = {
  pageMaxWidth: "1436px",
  pagePaddingX: "46px",
  pageContentWidth: "1344px",
  headerHeight: "56px",
  sectionSpacing: {
    hero: { py: "pb-12 md:pb-20" },
    default: { py: "py-20 md:py-28 lg:py-32" },
    compact: { py: "py-12 md:py-16" },
    cta: { py: "py-24 md:py-32 lg:py-40" },
    logos: { py: "py-12 md:py-16" },
  },
} as const;

export const radii = {
  panel: "rounded-2xl",
  card: "rounded-xl",
  pill: "rounded-full",
} as const;

export const testimonialColors = {
  lavender: "#c8c4f0",
  yellow: "#f5d547",
} as const;

export const colors = {
  bg: "#08090a",
  surface: "#141516",
  surfaceElevated: "#1c1c1f",
  border: "#2a2a2b",
  borderSubtle: "#232326",
  muted: "#8a8f98",
  text: "#f7f8f8",
  textSecondary: "#b4b8bf",
  accent: "#5e6ad2",
  accentHover: "#6b77e0",
  green: "#68cc58",
  orange: "#f2994a",
  red: "#eb5757",
  yellow: "#f2c94c",
} as const;

export const typography = {
  display:
    "text-[40px] leading-[1.1] md:text-[56px] md:leading-[1.05] lg:text-[72px] lg:leading-[1.02] font-semibold tracking-[-0.035em]",
  section: "text-3xl md:text-4xl lg:text-[44px] lg:leading-[1.1] font-medium tracking-[-0.03em]",
  eyebrow: "text-xs uppercase tracking-[0.12em] text-brand-muted font-medium",
  body: "text-base md:text-lg text-brand-muted leading-relaxed",
} as const;
