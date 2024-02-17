import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

function getDate() {
  let date = new Intl.DateTimeFormat("ru-RU")
    .format(new Date(new Date().getTime() - 2592000000))
    .split(".");
  date.push(date[1], date[0]);
  return date.slice(2).join("-");
}

const defaultState = {
  input: 1,
  result: 0,
  from: "USD",
  to: "EUR",
  histDate: getDate(),
  histData: [0],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "update-input":
      return { ...state, input: action.payload };
    case "update-result":
      return { ...state, result: action.payload };
    case "update-from":
      return { ...state, from: action.payload };
    case "update-to":
      return { ...state, to: action.payload };
    case "update-hist-date":
      return { ...state, histDate: action.payload };
    case "update-hist-data":
      return { ...state, histData: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
