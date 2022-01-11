import React from "react";

function StickyNote({ text }) {
  return (
    <div className="sticky-note-container">
      <div className="sticky-note-head"></div>
      <div className="sticky-note-body">{text}</div>
    </div>
  );
}

export default StickyNote;
