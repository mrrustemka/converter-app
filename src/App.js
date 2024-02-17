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
    result,
    from: curFrom,
    to: curTo,
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
      fetchCurrency();
    },
    [curFrom, curTo, dispatch, value]
  );

  useEffect(
    function () {
      async function fetchHistCurrency() {
        fetch(
          `https://api.frankfurter.app/2024-01-01..?amount=${parseFloat(
            value
          )}&from=${curFrom}&to=${curTo}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            // setHist(data.rates);
            // setIsLoading(false);
            console.log(data);
          });
      }

      // if (curFrom !== curTo) {
      //   fetchHistCurrency();
      // } else {
      //   setHist([{ "": { "": 0 } }]);
      // }
      fetchHistCurrency();
    },
    [curFrom, curTo, value]
  );
  return (
    <div className="App">
      <Header />
      <Input />
      <Currency type="update-from" />
      <Currency type="update-to" />
      <Output value={result} />
      <Keyboard />
      <ChartButton />
      <Chart />
    </div>
  );
}

export default App;
