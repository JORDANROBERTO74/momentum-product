import { UserRound } from "lucide-react";

export function IntakeVisual() {
  return (
    <div className="intake-visual">
      <div className="thread">
        <div className="thread-head">
          <b>✣　Thread</b>
          <small>#product　⋮</small>
        </div>
        <p>
          <UserRound size={18} /> <b>lena</b> <small>11:35 AM</small>
          <br />
          Anyone else noticing the workspace feels slow to open if you haven&apos;t
          used it in a bit?
        </p>
        <p>
          <UserRound size={18} /> <b>didier</b> <small>11:35 AM</small>
          <br />
          Yeah, we&apos;re still waiting for every panel before rendering the
          workspace every time...
        </p>
        <div className="thread-input">
          <span>@Momentum</span> create issues and assign to me{" "}
          <small>＋　Aa　☺　@　│　↑</small>
        </div>
      </div>
      <div className="board">
        <b>Todo　71　　　　　　 In Progress　3</b>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
