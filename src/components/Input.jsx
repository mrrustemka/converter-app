import React from "react";
import { useDispatch } from "react-redux";

function Input() {
  const dispatch = useDispatch();
  // const value = useSelector((state) => state.value);
  return (
    <div>
      <input
        onChange={(e) =>
          dispatch({ type: "update-input", payload: e.target.value })
        }
      />
    </div>
  );
}

export default Input;
