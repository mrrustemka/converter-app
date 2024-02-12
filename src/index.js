import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  input: 1,
  result: 0,
  from: "USD",
  to: "EUR",
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
