import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Keyboard() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state);
  function addDot(value) {
    if (!value.toString().includes(".")) {
      dispatch({ type: "update-input", payload: input + "." });
    }
  }
  return (
    <div>
      <div className="" role="group">
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "1" })
          }
        >
          1
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "2" })
          }
        >
          2
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "3" })
          }
        >
          3
        </button>
      </div>
      <div className="" role="group">
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "4" })
          }
        >
          4
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "5" })
          }
        >
          5
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "6" })
          }
        >
          6
        </button>
      </div>
      <div className="" role="group">
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "7" })
          }
        >
          7
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "8" })
          }
        >
          8
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "9" })
          }
        >
          9
        </button>
      </div>
      <div className="" role="group">
        <button type="button" className="" onClick={() => addDot(input)}>
          .
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "0" })
          }
        >
          0
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            dispatch({
              type: "update-input",
              payload: input.slice(0, input.length - 1),
            })
          }
        >
          &#9249;
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
