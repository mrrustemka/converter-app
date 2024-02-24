import React from "react";
import HourglassFullSharpIcon from "@mui/icons-material/HourglassFullSharp";
import { ToggleButton } from "@mui/material";

function ChartButton({ text, period }) {
  period.push(period[1], period[0]);
  period = period.slice(2).join("-");
  return (
    <ToggleButton
      value={period}
      aria-label={text}
      sx={{
        mx: "auto",
        color: "white",
        bgcolor: "black",
        minWidth: "132px",
        ":hover": {
          bgcolor: "black",
          opacity: "0.9",
        },
        justifyContent: "start",
      }}
    >
      <HourglassFullSharpIcon /> {text}
    </ToggleButton>
  );
}

export default ChartButton;
