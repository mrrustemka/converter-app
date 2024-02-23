import React from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

function Output() {
  const { result } = useSelector((state) => state);
  return (
    <Box sx={{ display: "inline", gridArea: "output", paddingTop: 2 }}>
      <TextField
        label="Output"
        InputProps={{
          readOnly: true,
        }}
        value={result.toFixed(2)}
        readOnly
        sx={{
          ".Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black !important",
          },
          ".Mui-focused": {
            color: "black !important",
          },
        }}
        size="small"
      />
    </Box>
  );
}

export default Output;
