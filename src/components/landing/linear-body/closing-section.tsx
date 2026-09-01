import { linearBodyContent } from "@/lib/linear-body-content";

interface ClosingSectionProps {
  onActionClick?: (label: string) => void;
}

export function ClosingSection({ onActionClick }: ClosingSectionProps) {
  const { closing } = linearBodyContent;

  return (
    <section id="pricing" className="closing section-wrap">
      <p className="eyebrow">{closing.eyebrow}</p>
      <h2>
        {closing.headline}
        <br />
        <span>{closing.headlineMuted}</span>
      </h2>
      <div className="closing-actions">
        {closing.actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className={action.variant === "primary" ? "primary" : "secondary"}
            onClick={() => onActionClick?.(action.label)}
          >
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
