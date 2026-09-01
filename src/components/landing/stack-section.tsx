import Image from "next/image";
import { Container, Section } from "@/components/linear";
import { logoCloud } from "@/lib/linear-content";

export function StackSection() {
  return (
    <Section spacing="logos" className="pt-16 md:pt-24 lg:pt-28">
      <Container>
        <Image
          src="/linear/logos/logo-strip.png"
          alt="OpenAI, Vercel, Salesforce, Figma, Cursor, Coinbase, Ramp"
          width={1356}
          height={64}
          className="h-auto w-full object-contain"
          sizes="(max-width: 1436px) 100vw, 1344px"
        />
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.08em] text-linear-muted md:mt-10 md:text-xs">
          {logoCloud.caption}
        </p>
      </Container>
    </Section>
  );
}
