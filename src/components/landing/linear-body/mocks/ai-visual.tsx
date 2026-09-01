function WindowControls() {
  return (
    <div className="agent-window-controls">
      <span />
      <span />
      <span />
    </div>
  );
}

export function AiVisual() {
  return (
    <div className="ai-visual">
      <div className="agent-card partial">
        <div className="agent-card-head">
          <span className="agent-logo linear-logo" />
          <span className="agent-name">Linear</span>
          <WindowControls />
        </div>
        <div className="agent-prompt">
          what are the three most important customer requests around permissions? add
          them to the Access Controls project
        </div>
        <p className="agent-status">
          Three issues ranked by customer impact:
          <br />
          ENG-2298 Add granular project permissions
          <br />
          ENG-2647 Let guests access multiple teams
        </p>
      </div>

      <div className="agent-card cursor">
        <div className="agent-card-head">
          <span className="agent-logo cursor-logo" />
          <span className="agent-name">Cursor</span>
          <WindowControls />
        </div>
        <div className="agent-prompt">
          add retry handling for failed image uploads described in this issue
        </div>
        <p className="agent-context">◉ ENG-2844 added to context</p>
        <p className="agent-status">
          <span className="agent-thinking">Thinking...</span> Started working on{" "}
          <b>ENG-2844 Failed image upload</b> and launched a cloud agent.
        </p>
        <div className="agent-progress">
          <span>Setting up DRV/rideshare-app...</span>
          <small>00:07</small>
        </div>
      </div>

      <div className="agent-card linear">
        <div className="agent-card-head">
          <span className="agent-logo linear-logo" />
          <span className="agent-name">Linear</span>
          <span className="agent-badge">Opus 5</span>
          <WindowControls />
        </div>
        <div className="agent-prompt">
          Review today&apos;s mobile triage and group the issues by what should happen
          next
        </div>
        <p className="agent-status">
          Worked for 12 sec. Reviewed eight issues: two are ready for backlog, two
          need details, and four belong to iOS or Android.
        </p>
        <div className="agent-issues">
          <b>Backlog · 2</b>
          <p>
            <span className="issue-dot orange" />
            ENG-2521 Missing inbox status colors
          </p>
          <p>
            <span className="issue-dot yellow" />
            ENG-2364 Notifications after logout...
          </p>
          <b>Needs information · 2</b>
          <p>
            <span className="issue-dot blue" />
            ENG-2557 Deep links discard issue drafts
          </p>
        </div>
      </div>

      <div className="agent-card chatprd">
        <div className="agent-card-head">
          <span className="agent-logo chatprd-logo" />
          <span className="agent-name">ChatPRD</span>
          <WindowControls />
        </div>
        <div className="agent-prompt">
          review this issue, draft complete requirements, and break the work into
          sub-issues
        </div>
        <p className="agent-status">
          Worked for 1 min. Updated the issue with requirements, decisions, and
          acceptance criteria.
        </p>
        <p className="agent-result">
          <span className="issue-check">✓</span> ENG-2920 Define offline mode
          requirements
        </p>
      </div>
    </div>
  );
}
