import React from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

function Output() {
  const { result } = useSelector((state) => state);
  return (
    <Box sx={{ display: "inline", gridArea: "output" }}>
      <TextField
        label="Output"
        InputProps={{
          readOnly: true,
        }}
        value={result.toFixed(2)}
        readOnly
        sx={{
          ".Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
        }}
        size="small"
      />
    </Box>
  );
}

export default Output;
