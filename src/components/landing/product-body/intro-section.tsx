import { bodyContent } from "@/lib/body-content";

function PrincipleArt({ type }: { type: "stack" | "blocks" | "stairs" }) {
  if (type === "stack") {
    return <div className="principle-art stack-art">◉</div>;
  }
  if (type === "blocks") {
    return (
      <div className="principle-art blocks-art">
        <i />
        <i />
        <i />
      </div>
    );
  }
  return (
    <div className="principle-art stairs-art">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

export function IntroSection() {
  const { intro } = bodyContent;

  return (
    <section id="product" className="intro section-wrap">
      <p>
        <strong>{intro.title}</strong> {intro.subtitle}
      </p>
      <div id="features" className="principles">
        {intro.principles.map((principle) => (
          <article key={principle.title}>
            <PrincipleArt type={principle.art} />
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
