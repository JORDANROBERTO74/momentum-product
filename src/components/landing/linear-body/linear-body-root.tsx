"use client";

import { useCallback, useState } from "react";
import "@/styles/linear-body.css";
import { linearBodyContent } from "@/lib/linear-body-content";
import { IntroSection } from "./intro-section";
import { FeatureSection } from "./feature-section";
import { ChangelogSection } from "./changelog-section";
import { TestimonialsSection } from "./testimonials-section";
import { ClosingSection } from "./closing-section";

export function LinearBody() {
  const [notice, setNotice] = useState("");

  const notify = useCallback((message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }, []);

  return (
    <div className="linear-body pt-8">
      <IntroSection />
      <FeatureSection
        title={linearBodyContent.intake.title}
        copy={linearBodyContent.intake.copy}
        visual="intake"
        links={linearBodyContent.intake.links}
      />
      <FeatureSection
        title={linearBodyContent.planning.title}
        copy={linearBodyContent.planning.copy}
        visual="planning"
        links={linearBodyContent.planning.links}
      />
      <FeatureSection
        title={linearBodyContent.ai.title}
        copy={linearBodyContent.ai.copy}
        visual="ai"
        links={linearBodyContent.ai.links}
      />
      <FeatureSection
        title={linearBodyContent.build.title}
        copy={linearBodyContent.build.copy}
        visual="build"
        links={linearBodyContent.build.links}
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
