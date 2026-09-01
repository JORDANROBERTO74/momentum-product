import { ArrowRight } from "lucide-react";
import { AiVisual } from "./mocks/ai-visual";
import { BuildVisual } from "./mocks/build-visual";
import { IntakeVisual } from "./mocks/intake-visual";
import { PlanningVisual } from "./mocks/planning-visual";

export interface FeatureSectionProps {
  title: readonly string[];
  copy: string;
  visual: "intake" | "planning" | "ai" | "build";
  links: readonly string[];
}

function FeatureVisual({ visual }: { visual: FeatureSectionProps["visual"] }) {
  if (visual === "planning") return <PlanningVisual />;
  if (visual === "ai") return <AiVisual />;
  if (visual === "build") return <BuildVisual />;
  return <IntakeVisual />;
}

export function FeatureSection({ title, copy, visual, links }: FeatureSectionProps) {
  const midpoint = Math.ceil(links.length / 2);

  return (
    <section className={`feature section-wrap ${visual}`}>
      <div className="feature-head">
        <h2>
          {title[0]}
          <br />
          {title[1]}
        </h2>
        <div>
          <p>{copy}</p>
          <button type="button" className="text-button">
            Learn more <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <FeatureVisual visual={visual} />

      <div className="feature-links">
        <span>Features</span>
        <div>
          {links.slice(0, midpoint).map((link) => (
            <a key={link} href="#">
              {link}　+
            </a>
          ))}
        </div>
        <div>
          {links.slice(midpoint).map((link) => (
            <a key={link} href="#">
              {link}　+
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
