import Link from "next/link";
import { Container, MotionSection, Section } from "@/components/ui";
import { finalCta } from "@/lib/content";
import { typography } from "@/lib/tokens";
import { cn } from "@/lib/cn";

export function FinalCtaSection() {
  return (
    <Section spacing="cta">
      <Container>
        <MotionSection className="text-center">
          <h2 className={cn(typography.section, "text-balance")}>{finalCta.title}</h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {finalCta.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={cn(
                  "rounded-lg px-5 py-2.5 text-sm font-medium transition",
                  action.primary
                    ? "bg-brand-text text-brand-bg hover:bg-white"
                    : "border border-brand-border text-brand-text-secondary hover:text-brand-text"
                )}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
