import { planningSection } from "@/lib/content";
import { assets } from "@/lib/assets";
import { ProductScreenshot } from "@/components/ui";
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
      <ProductScreenshot
        src={assets.planning}
        alt="Planning and monitoring"
        aspectRatio="5/4"
        unstyled
      />
    </FeatureSectionLayout>
  );
}
