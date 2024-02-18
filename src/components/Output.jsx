import React from "react";
import { useSelector } from "react-redux";

function Output() {
  const { result } = useSelector((state) => state);
  return (
    <div>
      <input readOnly value={result.toFixed(2)} />
    </div>
  );
}

export default Output;
