import Link from "next/link";
import Image from "next/image";
import { Container, MotionSection, Section } from "@/components/linear";
import { changelog } from "@/lib/linear-content";
import { linearTypography } from "@/lib/linear-tokens";

export function ChangelogSection() {
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className={linearTypography.section}>{changelog.title}</h2>
          <Link href="#" className="text-sm text-linear-muted transition hover:text-linear-text">
            {changelog.cta}
          </Link>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {changelog.entries.map((entry, index) => (
            <MotionSection
              key={entry.title}
              delay={index * 0.05}
              className="min-w-[260px] shrink-0 overflow-hidden rounded-2xl border border-linear-border bg-linear-surface/40 transition hover:border-linear-accent/30 lg:min-w-0"
            >
              <div className="relative aspect-[16/10] w-full bg-linear-surface">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1436px) 25vw, 320px"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium">{entry.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-linear-muted">
                  {entry.description}
                </p>
              </div>
            </MotionSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
