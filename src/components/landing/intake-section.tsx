import { intakeSection } from "@/lib/linear-content";
import { linearAssets } from "@/lib/linear-assets";
import { LinearScreenshot } from "@/components/linear";
import { FeatureSectionLayout } from "./feature-section-layout";

export function IntakeSection() {
  return (
    <FeatureSectionLayout
      title={intakeSection.title}
      description={intakeSection.description}
      cta={intakeSection.cta}
      features={intakeSection.features}
      layout="split"
    >
      <LinearScreenshot
        src={linearAssets.intake}
        alt="Intake and integrations"
        aspectRatio="5/4"
        unstyled
      />
    </FeatureSectionLayout>
  );
}
