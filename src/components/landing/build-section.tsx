import { buildSection } from "@/lib/linear-content";
import { linearAssets } from "@/lib/linear-assets";
import { LinearScreenshot } from "@/components/linear";
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
      <LinearScreenshot
        src={linearAssets.build}
        alt="Build, review, and ship"
        aspectRatio="5/4"
        unstyled
      />
    </FeatureSectionLayout>
  );
}
