"use client";

import Image from "next/image";
import { Container, MotionSection, Section } from "@/components/ui";
import { featureIntro } from "@/lib/content";
import { typography } from "@/lib/tokens";
import { cn } from "@/lib/cn";

export function FeatureIntro() {
  return (
    <Section>
      <Container>
        <MotionSection className="mx-auto max-w-4xl text-center">
          <h2 className={cn(typography.section, "text-balance")}>
            <span className="text-brand-text">{featureIntro.title}</span>{" "}
            <span className="text-brand-muted">{featureIntro.subtitle}</span>
          </h2>
        </MotionSection>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-24">
          {featureIntro.features.map((feature, index) => (
            <MotionSection key={feature.title} delay={index * 0.08}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1436px) 33vw, 420px"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {feature.description}
              </p>
            </MotionSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
