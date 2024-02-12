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
  const value = useSelector((state) => state.input);
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  useEffect(
    function () {
      async function fetchCurrency() {
        fetch(
          `https://api.frankfurter.app/latest?amount=${parseFloat(
            value
          )}&from=USD&to=EUR`
        )
          .then((resp) => resp.json())
          .then((data) => {
            dispatch({ type: "update-result", payload: data.rates?.EUR });
          });
      }
      fetchCurrency();
    },
    [value]
  );
  return (
    <div className="App">
      <Header />
      <Input />
      <Currency />
      <Currency />
      <Output value={result} />
      <Keyboard />
      <ChartButton />
      <Chart />
    </div>
  );
}

export default App;
