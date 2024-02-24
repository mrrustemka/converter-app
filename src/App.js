import React, { useEffect } from "react";
import Chart from "./components/Chart";
import ChartButton from "./components/ChartButton";
import Currency from "./components/Currency";
import Header from "./components/Header";
import Input from "./components/Enter";
import Keyboard from "./components/Keyboard";
import Output from "./components/Output";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid/Grid";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function App() {
  const {
    input: value,
    from: curFrom,
    to: curTo,
    histDate,
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(
    function () {
      async function fetchCurrency() {
        fetch(
          `https://api.frankfurter.app/latest?amount=${parseFloat(
            value
          )}&from=${curFrom}&to=${curTo}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log("1", data);
            console.log();
            dispatch({ type: "update-result", payload: data.rates[curTo] });
          });
      }
      if (curFrom !== curTo && value > 0 && value !== 0) {
        fetchCurrency();
      }
    },
    [curFrom, curTo, dispatch, value]
  );

  useEffect(
    function () {
      async function fetchHistCurrency() {
        fetch(
          `https://api.frankfurter.app/${histDate}..?amount=${parseFloat(
            value
          )}&from=${curFrom}&to=${curTo}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log("2", data);

            dispatch({
              type: "update-hist-data",
              payload: data.rates,
            });
          });
      }

      if (curFrom !== curTo && value > 0 && value !== 0) {
        fetchHistCurrency();
      }
    },
    [curFrom, curTo, dispatch, histDate, value]
  );

  const handleAlignment = (event, newAlignment) => {
    dispatch({ type: "update-hist-date", payload: newAlignment });
  };
  return (
    <Grid
      container
      className="App"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        bgcolor: "text.primary",
        color: "background.paper",
        gridTemplateAreas: `"converter chart chart chart"`,
        gap: 2,
        p: 4,
      }}
    >
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2fr 1fr)",
          gridTemplateRows: "auto auto auto 1fr",
          gridTemplateAreas: `"header header"
          "input currencyFrom"
          "output currencyTo"
          "keyboard keyboard"`,
          gap: 1,
          gridArea: "converter",
          // bgcolor: "silver",
          background: "linear-gradient(white, silver)",
          color: "background.paper",
          p: 2,
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <Header />
        <Input />
        <Currency
          type="update-from"
          defaultValue="USD"
          gridArea="currencyFrom"
        />
        <Output />
        <Currency type="update-to" defaultValue="EUR" gridArea="currencyTo" />
        <Keyboard />
      </Grid>
      <Box
        sx={{
          gridArea: "chart",
          background:
            "linear-gradient(to left, silver, silver 5%, white 76%, silver 88%)",
          color: "background.paper",
          borderRadius: "12px",
          paddingLeft: 2,
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "1fr",
          gap: 1,
        }}
      >
        <ToggleButtonGroup
          value={histDate}
          exclusive
          onChange={handleAlignment}
          aria-label="period"
          size="small"
          orientation="vertical"
          sx={{
            ".Mui-selected": {
              bgcolor: "white !important",
            },
            ".MuiButtonBase-root-MuiToggleButton-root:hover": {
              bgcolor: "black",
              opacity: "0.9 !important",
            },
            minWidth: "132px",
            marginTop: "16px",
          }}
        >
          <ChartButton
            key="5days"
            text="5 Days"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 432e6))
              .split(".")}
          />
          <ChartButton
            key="10days"
            text="10 Days"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 864e6))
              .split(".")}
          />
          <ChartButton
            key="1month"
            text="1 Month"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 2592e6))
              .split(".")}
          />
          <ChartButton
            key="3months"
            text="3 Months"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 7776e6))
              .split(".")}
          />
          <ChartButton
            key="6months"
            text="6 Months"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 158112e5))
              .split(".")}
          />
          <ChartButton
            key="1year"
            text="1 Year"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 31536e6))
              .split(".")}
          />
          <ChartButton
            key="3years"
            text="3 Years"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 94608e6))
              .split(".")}
          />
          <ChartButton
            key="5years"
            text="5 Years"
            period={new Intl.DateTimeFormat("ru-RU")
              .format(new Date(new Date().getTime() - 15768e7))
              .split(".")}
          />
        </ToggleButtonGroup>
        <Chart />
      </Box>
    </Grid>
  );
}

export default App;
