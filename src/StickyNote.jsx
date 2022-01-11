import React from "react";

function StickyNote({ name, message }) {
  console.log(`Name: ${name}, Message: ${message}`);
  return (
    <div>
      <h1>{name}</h1>
      <h2>Message: {message}</h2>
      <hr />
    </div>
  );
}

export default StickyNote;
