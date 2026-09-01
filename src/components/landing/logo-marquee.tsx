import Image from "next/image";
import { Container, Section } from "@/components/linear";
import { logoCloud } from "@/lib/linear-content";

export function LogoMarquee() {
  return (
    <Section spacing="logos" padded={false}>
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-14">
          {logoCloud.logos.map((logo, index) => (
            <Image
              key={`${logo}-${index}`}
              src={logo}
              alt=""
              width={56}
              height={56}
              className="h-7 w-auto opacity-45 grayscale"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
