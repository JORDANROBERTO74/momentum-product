import { heroIssue } from "@/lib/content";
import { cn } from "@/lib/cn";

function Label({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "blue" | "green" }) {
  const tones = {
    default: "bg-brand-border/80 text-brand-text-secondary",
    blue: "bg-brand-accent/20 text-brand-accent",
    green: "bg-brand-green/15 text-brand-green",
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
    <div className="rounded-xl border border-brand-border bg-brand-bg/70">
      <div className="flex items-center justify-between border-b border-brand-border px-4 py-3">
        <div>
          <div className="text-xs text-brand-muted">{issue.id}</div>
          <div className="text-sm font-medium">{issue.title}</div>
        </div>
        <div className="text-xs text-brand-muted">{issue.progress}</div>
      </div>

      <div className="space-y-4 px-4 py-4">
        <p className="text-xs leading-relaxed text-brand-muted">{issue.description}</p>

        {!compact ? (
          <>
            <div>
              <div className="mb-2 text-xs font-medium text-brand-text">Activity</div>
              <div className="space-y-3">
                {issue.activity.map((item) => (
                  <div key={item.text} className="text-xs text-brand-muted">
                    <span className="text-brand-text-secondary">{item.actor}</span> {item.text}
                    <span className="ml-2 text-brand-muted/70">· {item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-brand-muted">Status</div>
                <div className="mt-1">{issue.properties.status}</div>
              </div>
              <div>
                <div className="text-brand-muted">Priority</div>
                <div className="mt-1">{issue.properties.priority}</div>
              </div>
              <div>
                <div className="text-brand-muted">Assignee</div>
                <div className="mt-1">{issue.properties.assignee}</div>
              </div>
              <div>
                <div className="text-brand-muted">Cycle</div>
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
