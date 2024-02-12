import React, { useEffect } from "react";
import Chart from "./components/Chart";
import ChartButton from "./components/ChartButton";
import Currency from "./components/Currency";
import Header from "./components/Header";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";
import Output from "./components/Output";
import { useSelector } from "react-redux";

function App() {
  const value = useSelector((state) => state.value);
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
            console.log(data.rates);
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
      <Output />
      <Keyboard />
      <ChartButton />
      <Chart />
    </div>
  );
}

export default App;
