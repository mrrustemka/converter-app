import React, { useEffect } from "react";
import Chart from "./components/Chart";
import ChartButton from "./components/ChartButton";
import Currency from "./components/Currency";
import Header from "./components/Header";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";
import Output from "./components/Output";
import { useSelector, useDispatch } from "react-redux";

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
            dispatch({ type: "update-result", payload: data.rates[curTo] });
          });
      }
      if (curFrom !== curTo && value > 0 && value !== 0) {
        fetchCurrency();
      }
      console.log(value > 0);
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
            // setHist(data.rates);
            // setIsLoading(false);
            dispatch({
              type: "update-hist-data",
              payload: data.rates,
            });
          });
      }

      // if (curFrom !== curTo) {
      //   fetchHistCurrency();
      // } else {
      //   setHist([{ "": { "": 0 } }]);
      // }
      if (curFrom !== curTo && value > 0 && value !== 0) {
        fetchHistCurrency();
      }
    },
    [curFrom, curTo, dispatch, histDate, value]
  );
  return (
    <div className="App">
      <Header />
      <Input />
      <Currency type="update-from" defaultValue="USD" />
      <Currency type="update-to" defaultValue="EUR" />
      <Output />
      <Keyboard />
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
      <Chart />
    </div>
  );
}

export default App;
