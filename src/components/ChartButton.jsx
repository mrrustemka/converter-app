import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import HourglassFullSharpIcon from "@mui/icons-material/HourglassFullSharp";

function ChartButton({ text, period, gridStyle }) {
  const dispatch = useDispatch();
  period.push(period[1], period[0]);
  period = period.slice(2).join("-");
  return (
    <Box sx={{ mx: "auto" }}>
      <Button
        type="button"
        size="medium"
        variant="contained"
        onClick={() => dispatch({ type: "update-hist-date", payload: period })}
        sx={{
          gridArea: gridStyle,
          mx: "auto",
          bgcolor: "black",
          "&:hover, &.Mui-focusVisible": {
            bgcolor: `black`,
            opacity: ".9",
          },
        }}
        startIcon={<HourglassFullSharpIcon />}
      >
        {text}
      </Button>
    </Box>
  );
}

export default ChartButton;
