import React from "react";
import { useDispatch } from "react-redux";

function Currency({ type }) {
  const dispatch = useDispatch();
  return (
    <div>
      <select
        onChange={(e) => dispatch({ type: type, payload: e.target.value })}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
        <option value="CNY">CNY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="HKD">HKD</option>
        <option value="SGD">SGD</option>
        <option value="SEK">SEK</option>
        <option value="KRW">KRW</option>
        <option value="NOK">NOK</option>
        <option value="NZD">NZD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
}

export default Currency;
