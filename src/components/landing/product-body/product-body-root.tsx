"use client";

import { useCallback, useState } from "react";
import "@/styles/body.css";
import { bodyContent } from "@/lib/body-content";
import { IntroSection } from "./intro-section";
import { FeatureSection } from "./feature-section";
import { ChangelogSection } from "./changelog-section";
import { TestimonialsSection } from "./testimonials-section";
import { ClosingSection } from "./closing-section";

export function ProductBody() {
  const [notice, setNotice] = useState("");

  const notify = useCallback((message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }, []);

  return (
    <div className="product-body pt-8">
      <IntroSection />
      <FeatureSection
        title={bodyContent.intake.title}
        copy={bodyContent.intake.copy}
        visual="intake"
        links={bodyContent.intake.links}
      />
      <FeatureSection
        title={bodyContent.planning.title}
        copy={bodyContent.planning.copy}
        visual="planning"
        links={bodyContent.planning.links}
      />
      <FeatureSection
        title={bodyContent.ai.title}
        copy={bodyContent.ai.copy}
        visual="ai"
        links={bodyContent.ai.links}
      />
      <FeatureSection
        title={bodyContent.build.title}
        copy={bodyContent.build.copy}
        visual="build"
        links={bodyContent.build.links}
      />
      <ChangelogSection />
      <TestimonialsSection />
      <ClosingSection
        onActionClick={(label) => notify(`Thanks for your interest in ${label}.`)}
      />
      {notice ? (
        <div className="toast" role="status">
          {notice}
        </div>
      ) : null}
    </div>
  );
}
