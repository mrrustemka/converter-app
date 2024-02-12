import React from "react";

function Output({ value }) {
  return (
    <div>
      <input readOnly value={value} />
    </div>
  );
}

export default Output;
