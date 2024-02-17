import React from "react";
import { useDispatch } from "react-redux";

function ChartButton({ text, period }) {
  const dispatch = useDispatch();
  period.push(period[1], period[0]);
  period = period.slice(2).join("-");
  return (
    <div className="d-inline m-2">
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => dispatch({ type: "update-hist-date", payload: period })}
      >
        {text}
      </button>
    </div>
  );
}

export default ChartButton;
