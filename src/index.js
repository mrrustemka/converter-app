import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  input: 0,
  result: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "update-input":
      return { ...state, input: action.payload };
    case "update-result":
      return { ...state, result: action.payload };
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
