import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button, Box } from "@mui/material";

function Keyboard() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state);
  function addDot(value) {
    if (!value.toString().includes(".")) {
      dispatch({ type: "update-input", payload: input + "." });
    }
  }
  return (
    <Box sx={{ p: 2 }}>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{ display: "block", width: "fit-content", margin: "auto" }}
      >
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "1" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderBottomLeftRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          1
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "2" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          2
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "3" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderBottomRightRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          3
        </Button>
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{ display: "block", width: "fit-content", margin: "auto" }}
      >
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "4" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          4
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "5" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          5
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "6" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          6
        </Button>
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{ display: "block", width: "fit-content", margin: "auto" }}
      >
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "7" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          7
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "8" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          8
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "9" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          9
        </Button>
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{ display: "block", width: "fit-content", margin: "auto" }}
      >
        <Button
          type="button"
          variant="contained"
          onClick={() => addDot(input)}
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderTopLeftRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          .
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({ type: "update-input", payload: input + "0" })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          0
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            dispatch({
              type: "update-input",
              payload: input.slice(0, input.length - 1),
            })
          }
          sx={{
            bgcolor: "black",
            borderRight: "none !important",
            width: "40px",
            height: "40px",
            borderTopRightRadius: 0,
            "&:hover, &.Mui-focusVisible": {
              bgcolor: `black`,
              opacity: ".9",
            },
          }}
        >
          &#9249;
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Keyboard;
