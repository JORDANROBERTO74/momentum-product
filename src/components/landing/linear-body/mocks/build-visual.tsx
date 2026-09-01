import { buildSection } from "@/lib/linear-content";

export function BuildVisual() {
  const { reviewColumns, codeDiff } = buildSection;

  return (
    <div className="build-visual">
      <div className="build-board">
        {reviewColumns.map((column) => (
          <div key={column.name} className="build-column">
            <div className="build-column-head">
              {column.name} · {column.count}
            </div>
            {column.issues.map((issue) => (
              <div key={issue.id} className="build-issue">
                <span className="build-issue-id">{issue.id}</span>
                <span className="build-issue-title">{issue.title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="build-diff">
        <div className="build-diff-head">{codeDiff.file}</div>
        <div className="build-diff-body">
          <pre className="diff-line removed">
            <code>{codeDiff.before}</code>
          </pre>
          <pre className="diff-line added">
            <code>{codeDiff.after}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
