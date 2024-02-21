import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

function Enter() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state);
  return (
    <Box sx={{ display: "inline", gridArea: "input" }}>
      <TextField
        label="Input"
        variant="outlined"
        onChange={(e) =>
          dispatch({ type: "update-input", payload: e.target.value })
        }
        value={input}
        defaultValue={1}
        placeholder="Enter Amount"
        sx={{
          ".Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          ".MuiFormControl-root .MuiTextField-root .MuiFormControl-root-MuiTextField-root .MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
            {
              color: "black !important",
            },
        }}
        size="small"
      />
    </Box>
  );
}

export default Enter;
