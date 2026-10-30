import { intakeSection } from "@/lib/content";
import { assets } from "@/lib/assets";
import { ProductScreenshot } from "@/components/ui";
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
      <ProductScreenshot
        src={assets.intake}
        alt="Intake and integrations"
        aspectRatio="5/4"
        unstyled
      />
    </FeatureSectionLayout>
  );
}
