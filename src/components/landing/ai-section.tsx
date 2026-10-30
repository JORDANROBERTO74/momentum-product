import { aiSection } from "@/lib/content";
import { assets } from "@/lib/assets";
import { ProductScreenshot } from "@/components/ui";
import { FeatureSectionLayout } from "./feature-section-layout";

export function AISection() {
  return (
    <FeatureSectionLayout
      title={aiSection.title}
      description={aiSection.description}
      cta={aiSection.cta}
      features={aiSection.features}
      layout="cards-row"
    >
      {assets.ai.map((src, index) => (
        <div key={src} className="min-w-[240px] shrink-0 md:min-w-0">
          <ProductScreenshot
            src={src}
            alt={`AI automation example ${index + 1}`}
            aspectRatio="3/4"
            unstyled
            className="rounded-xl border border-brand-border"
            imageClassName="object-cover object-top"
          />
        </div>
      ))}
    </FeatureSectionLayout>
  );
}
