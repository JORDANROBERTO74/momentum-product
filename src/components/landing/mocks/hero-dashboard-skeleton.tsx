export function HeroDashboardSkeleton() {
  return (
    <div
      className="relative aspect-[2560/1429] overflow-hidden rounded-[10px] border border-linear-border/60 bg-linear-bg"
      aria-hidden
    >
      <div className="flex h-full min-h-0">
        {/* Sidebar */}
        <aside className="hidden w-[200px] shrink-0 flex-col gap-1 border-r border-linear-border/80 bg-linear-surface/80 p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-1">
            <div className="h-4 w-4 rounded bg-linear-border" />
            <div className="h-2.5 w-16 rounded bg-linear-border" />
          </div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-md px-2 py-1.5"
              style={{ opacity: 1 - i * 0.06 }}
            >
              <div className="h-3 w-3 shrink-0 rounded bg-linear-border/90" />
              <div
                className="h-2 rounded bg-linear-border/70"
                style={{ width: `${48 + (i % 4) * 12}%` }}
              />
            </div>
          ))}
          <div className="mt-auto space-y-1.5 border-t border-linear-border/60 pt-3">
            <div className="h-2 w-3/5 rounded bg-linear-border/50" />
            <div className="h-2 w-2/5 rounded bg-linear-border/40" />
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-linear-border/80 px-4 py-3 md:px-5">
            <div className="h-3 w-28 rounded bg-linear-border md:w-36" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-16 rounded-md bg-linear-border/60" />
              <div className="h-6 w-6 rounded-full bg-linear-border/50" />
            </div>
          </header>

          <div className="flex min-h-0 flex-1 flex-col gap-4 p-4 md:gap-5 md:p-5">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {[72, 56, 44].map((w, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-linear-border/70 bg-linear-surface/60 p-3 md:p-4"
                >
                  <div className="mb-3 h-2 w-12 rounded bg-linear-border/50 md:w-16" />
                  <div
                    className="h-6 rounded bg-linear-border/80 md:h-8"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>

            {/* Chart + table */}
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-[1.2fr_1fr] md:gap-4">
              <div className="flex min-h-[120px] flex-col rounded-lg border border-linear-border/70 bg-linear-surface/40 p-3 md:min-h-0 md:p-4">
                <div className="mb-4 h-2 w-24 rounded bg-linear-border/50" />
                <div className="flex flex-1 items-end gap-1.5 md:gap-2">
                  {[40, 65, 48, 82, 55, 70, 38, 90, 60, 75, 45, 68].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-linear-border/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden min-h-0 flex-col rounded-lg border border-linear-border/70 bg-linear-surface/40 p-3 md:flex md:p-4">
                <div className="mb-3 flex gap-4 border-b border-linear-border/50 pb-2">
                  <div className="h-2 w-14 rounded bg-linear-border/60" />
                  <div className="h-2 w-10 rounded bg-linear-border/40" />
                  <div className="h-2 w-12 rounded bg-linear-border/40" />
                  <div className="ml-auto h-2 w-10 rounded bg-linear-border/40" />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-2 py-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-linear-border/70" />
                      <div
                        className="h-2 rounded bg-linear-border/65"
                        style={{ width: `${38 + (i % 3) * 14}%` }}
                      />
                      <div className="ml-auto h-2 w-8 rounded bg-linear-border/45" />
                      <div className="h-2 w-8 rounded bg-linear-border/35" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
