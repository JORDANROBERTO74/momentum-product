import Image from "next/image";
import { Container, MotionSection, Section } from "@/components/ui";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/cn";

const testimonialStyles = {
  lavender: "bg-brand-lavender text-[#1a1a2e]",
  yellow: "bg-brand-yellow-bright text-[#1a1a1a]",
};

export function TestimonialsSection() {
  return (
    <Section spacing="compact" className="pt-0">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 lg:mt-24">
          {testimonials.map((item, index) => (
            <MotionSection
              key={item.author}
              delay={index * 0.06}
              className={cn(
                "flex flex-col justify-between rounded-2xl p-10 lg:p-12",
                testimonialStyles[item.variant]
              )}
            >
              <blockquote className="text-lg font-medium leading-snug tracking-tight md:text-xl lg:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-10 flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">{item.author}</div>
                  <div className="mt-1 text-sm opacity-70">{item.role}</div>
                </div>
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="h-8 w-auto opacity-80"
                  />
                ) : null}
              </div>
            </MotionSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
