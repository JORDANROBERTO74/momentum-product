import { buildSection } from "@/lib/content";
import { assets } from "@/lib/assets";
import { ProductScreenshot } from "@/components/ui";
import { FeatureSectionLayout } from "./feature-section-layout";

export function BuildSection() {
  return (
    <FeatureSectionLayout
      title={buildSection.title}
      description={buildSection.description}
      cta={buildSection.cta}
      features={buildSection.features}
      layout="stacked"
    >
      <ProductScreenshot
        src={assets.build}
        alt="Build, review, and ship"
        aspectRatio="5/4"
        unstyled
      />
    </FeatureSectionLayout>
  );
}
