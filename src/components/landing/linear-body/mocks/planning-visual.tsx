export function PlanningVisual() {
  return (
    <div className="planning-visual">
      <div className="timeline">
        <div className="months">FEB　　　　　 MAR　　　　　　　 APR</div>
        <div className="grid-line" />
        <div className="lane one">
          ⚒ UI Refresh <b>◆</b>
          <span />
        </div>
        <div className="lane two">
          ▣ Split fares <b>◆</b>
          <span />
        </div>
        <div className="lane three">
          Autonomy telemetry reliability　⌁<span />
        </div>
      </div>
      <div className="chart">
        <b>Cycle time by agent</b>
        <div className="chart-lines">
          <i />
          <i />
          <i />
        </div>
        <div className="dots">
          {Array.from({ length: 45 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${12 + (i % 5) * 3 + Math.sin(i) * 2}%`,
                top: `${28 + ((i * 17) % 58)}%`,
              }}
            />
          ))}
        </div>
        <div className="chart-labels">
          Oct 2025　　　　 Nov 2025　　　　 Dec 2025　　　　 Jan 2026
        </div>
      </div>
    </div>
  );
}
