import { planningSection } from "@/lib/linear-content";
import { linearAssets } from "@/lib/linear-assets";
import { LinearScreenshot } from "@/components/linear";
import { FeatureSectionLayout } from "./feature-section-layout";

export function PlanningSection() {
  return (
    <FeatureSectionLayout
      title={planningSection.title}
      description={planningSection.description}
      cta={planningSection.cta}
      features={planningSection.features}
      layout="split"
      reverse
    >
      <LinearScreenshot
        src={linearAssets.planning}
        alt="Planning and monitoring"
        aspectRatio="5/4"
        unstyled
      />
    </FeatureSectionLayout>
  );
}
