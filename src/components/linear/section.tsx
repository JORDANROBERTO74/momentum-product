import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { linearLayout } from "@/lib/linear-tokens";

export type SectionSpacing = "hero" | "default" | "compact" | "cta" | "logos";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "header" | "footer";
  padded?: boolean;
  spacing?: SectionSpacing;
}

const spacingClasses: Record<SectionSpacing, string> = {
  hero: linearLayout.sectionSpacing.hero.py,
  default: linearLayout.sectionSpacing.default.py,
  compact: linearLayout.sectionSpacing.compact.py,
  cta: linearLayout.sectionSpacing.cta.py,
  logos: linearLayout.sectionSpacing.logos.py,
};

export function Section({
  as: Component = "section",
  padded = true,
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn("relative w-full", padded && spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
