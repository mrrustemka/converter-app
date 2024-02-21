import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { input, result, from, to } = useSelector((state) => state);
  return (
    <Box
      sx={{
        gridArea: "header",
      }}
    >
      <h1>Converter App</h1>
      <h5>
        1 {from} equals {(result / input).toFixed(2)} {to}
      </h5>
    </Box>
  );
}

export default Header;
