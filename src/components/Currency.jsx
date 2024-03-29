import React from "react";
import { useDispatch } from "react-redux";
import { Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";

function Currency({ type, defaultValue, gridArea }) {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "inline",
        gridArea: gridArea,
        paddingTop: 2,
        ".Mui-focused.MuiOutlinedInput-notchedOutline": {
          borderColor: "black !important",
        },
      }}
    >
      <Select
        onChange={(e) => dispatch({ type: type, payload: e.target.value })}
        defaultValue={defaultValue}
        label="Currency"
        size="small"
        sx={{
          "fieldset": {
            borderColor: "black !important",
          },
        }}
      >
        <MenuItem value="USD">$ USD</MenuItem>
        <MenuItem value="EUR">€ EUR</MenuItem>
        <MenuItem value="JPY">¥ JPY</MenuItem>
        <MenuItem value="GBP">£ GBP</MenuItem>
        <MenuItem value="CNY">¥ CNY</MenuItem>
        <MenuItem value="AUD">$ AUD</MenuItem>
        <MenuItem value="CAD">$ CAD</MenuItem>
        <MenuItem value="CHF">₣ CHF</MenuItem>
        <MenuItem value="HKD">$ HKD</MenuItem>
        <MenuItem value="SGD">S$ SGD</MenuItem>
        <MenuItem value="SEK">kr SEK</MenuItem>
        <MenuItem value="KRW">₩ KRW</MenuItem>
        <MenuItem value="NOK">kr NOK</MenuItem>
        <MenuItem value="NZD">$ NZD</MenuItem>
        <MenuItem value="INR">₹ INR</MenuItem>
      </Select>
    </Box>
  );
}

export default Currency;
