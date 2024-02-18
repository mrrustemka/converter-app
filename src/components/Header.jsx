import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { input, result, from, to } = useSelector((state) => state);
  return (
    <div>
      <h1>Converter</h1>
      <h5>
        1 {from} equals {(result / input).toFixed(2)} {to}
      </h5>
    </div>
  );
}

export default Header;
