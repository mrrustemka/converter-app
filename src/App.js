import React from "react";
import Chart from "./components/Chart";
import ChartButton from "./components/ChartButton";
import Currency from "./components/Currency";
import Header from "./components/Header";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";
import Output from "./components/Output";

function App() {
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
