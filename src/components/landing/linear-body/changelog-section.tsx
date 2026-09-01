import { linearBodyContent } from "@/lib/linear-body-content";

export function ChangelogSection() {
  const { changelog } = linearBodyContent;

  return (
    <section className="changelog section-wrap">
      <h2>{changelog.title}</h2>

      <div className="changelog-timeline" aria-hidden>
        <div className="changelog-timeline-line" />
        {changelog.entries.map((entry, index) => (
          <span
            key={entry.title}
            className={`changelog-dot${index === 0 ? " active" : ""}`}
          />
        ))}
      </div>

      <div className="changelog-grid">
        {changelog.entries.map((entry, index) => (
          <article key={entry.title} className="changelog-entry">
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <time className="changelog-date">{entry.date}</time>
            {index === 0 ? (
              <a href="#" className="changelog-cta">
                {changelog.cta}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
