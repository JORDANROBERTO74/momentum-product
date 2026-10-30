import Link from "next/link";
import { Container, MotionSection, Section } from "@/components/ui";
import { typography } from "@/lib/tokens";
import { cn } from "@/lib/cn";

export type FeatureLayoutVariant = "split" | "stacked" | "cards-row";

function FeatureSectionHeader({
  title,
  description,
  cta,
  features,
  className,
}: {
  title: string;
  description: string;
  cta: string;
  features: string[];
  className?: string;
}) {
  return (
    <div className={cn("max-w-xl", className)}>
      <h2 className={cn("whitespace-pre-line", typography.section)}>{title}</h2>
      <p className="mt-5 text-brand-muted md:text-lg">{description}</p>
      <Link
        href="#"
        className="mt-6 inline-flex text-sm text-brand-text transition hover:text-brand-accent"
      >
        {cta}
      </Link>
      <div className="mt-8 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span
            key={feature}
            className="rounded-full border border-brand-border px-3 py-1 text-xs text-brand-text-secondary"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}

export function FeatureSectionLayout({
  title,
  description,
  cta,
  features,
  children,
  layout = "split",
  reverse = false,
}: {
  title: string;
  description: string;
  cta: string;
  features: string[];
  children: React.ReactNode;
  layout?: FeatureLayoutVariant;
  reverse?: boolean;
}) {
  if (layout === "stacked") {
    return (
      <Section>
        <Container>
          <MotionSection>
            <FeatureSectionHeader
              title={title}
              description={description}
              cta={cta}
              features={features}
            />
          </MotionSection>
          <MotionSection delay={0.1} className="mt-12 lg:mt-16">
            {children}
          </MotionSection>
        </Container>
      </Section>
    );
  }

  if (layout === "cards-row") {
    return (
      <Section>
        <Container>
          <MotionSection>
            <FeatureSectionHeader
              title={title}
              description={description}
              cta={cta}
              features={features}
              className="max-w-2xl"
            />
          </MotionSection>
          <div className="mt-12 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:mt-16">
            {children}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <MotionSection>
            <FeatureSectionHeader
              title={title}
              description={description}
              cta={cta}
              features={features}
            />
          </MotionSection>
          <MotionSection delay={0.1}>{children}</MotionSection>
        </div>
      </Container>
    </Section>
  );
}
