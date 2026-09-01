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
          Anyone else noticing the iOS app feels slow to open if you haven&apos;t
          used it in a bit?
        </p>
        <p>
          <UserRound size={18} /> <b>didier</b> <small>11:35 AM</small>
          <br />
          Yeah, we&apos;re still blocking initial render on a full vehicle_state
          sync every time...
        </p>
        <div className="thread-input">
          <span>@Linear</span> create issues and assign to me{" "}
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
