import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Input() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state);
  return (
    <div>
      <input
        onChange={(e) =>
          dispatch({ type: "update-input", payload: e.target.value })
        }
        value={input}
        defaultValue={1}
      />
    </div>
  );
}

export default Input;
