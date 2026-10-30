import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { layout } from "@/lib/tokens";

export type SectionSpacing = "hero" | "default" | "compact" | "cta" | "logos";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "header" | "footer";
  padded?: boolean;
  spacing?: SectionSpacing;
}

const spacingClasses: Record<SectionSpacing, string> = {
  hero: layout.sectionSpacing.hero.py,
  default: layout.sectionSpacing.default.py,
  compact: layout.sectionSpacing.compact.py,
  cta: layout.sectionSpacing.cta.py,
  logos: layout.sectionSpacing.logos.py,
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
