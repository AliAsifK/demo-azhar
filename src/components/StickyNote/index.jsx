import React from "react";
import StickyNoteBody from "./StickyNoteBody";
import StickyNoteHead from "./StickyNoteHead";
import "./styles.css";

function StickyNote({ text }) {
  return (
    <div className="sticky-note-container">
      <StickyNoteHead />
      <StickyNoteBody text={text} />
    </div>
  );
}

export default StickyNote;
