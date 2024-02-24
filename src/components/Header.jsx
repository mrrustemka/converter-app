import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { input, result, from, to } = useSelector((state) => state);
  return (
    <Box
      sx={{
        gridArea: "header",
        bgcolor: "black",
        color: "white",
        borderRadius: "12px",
      }}
    >
      <h1>Converter App</h1>
      <h5>
        {isNaN(result / input) || result / input === undefined
          ? "Enter Correct Amount"
          : `1 ${from} = ${(result / input).toFixed(2)} ${to}`}
      </h5>
    </Box>
  );
}

export default Header;
