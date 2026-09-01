import { heroIssue } from "@/lib/linear-content";
import { cn } from "@/lib/cn";

function Label({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "blue" | "green" }) {
  const tones = {
    default: "bg-linear-border/80 text-linear-text-secondary",
    blue: "bg-linear-accent/20 text-linear-accent",
    green: "bg-linear-green/15 text-linear-green",
  };
  return (
    <span className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium", tones[tone])}>
      {children}
    </span>
  );
}

export function IssuePanel({ compact = false }: { compact?: boolean }) {
  const issue = heroIssue;

  return (
    <div className="rounded-xl border border-linear-border bg-linear-bg/70">
      <div className="flex items-center justify-between border-b border-linear-border px-4 py-3">
        <div>
          <div className="text-xs text-linear-muted">{issue.id}</div>
          <div className="text-sm font-medium">{issue.title}</div>
        </div>
        <div className="text-xs text-linear-muted">{issue.progress}</div>
      </div>

      <div className="space-y-4 px-4 py-4">
        <p className="text-xs leading-relaxed text-linear-muted">{issue.description}</p>

        {!compact ? (
          <>
            <div>
              <div className="mb-2 text-xs font-medium text-linear-text">Activity</div>
              <div className="space-y-3">
                {issue.activity.map((item) => (
                  <div key={item.text} className="text-xs text-linear-muted">
                    <span className="text-linear-text-secondary">{item.actor}</span> {item.text}
                    <span className="ml-2 text-linear-muted/70">· {item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-linear-muted">Status</div>
                <div className="mt-1">{issue.properties.status}</div>
              </div>
              <div>
                <div className="text-linear-muted">Priority</div>
                <div className="mt-1">{issue.properties.priority}</div>
              </div>
              <div>
                <div className="text-linear-muted">Assignee</div>
                <div className="mt-1">{issue.properties.assignee}</div>
              </div>
              <div>
                <div className="text-linear-muted">Cycle</div>
                <div className="mt-1">{issue.properties.cycle}</div>
              </div>
            </div>
          </>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {issue.properties.labels.map((label) => (
            <Label key={label} tone={label === "Performance" ? "blue" : "green"}>
              {label}
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}
