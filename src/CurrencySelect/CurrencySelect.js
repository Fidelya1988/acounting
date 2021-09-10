import React from "react";
import { getCurrencyExchange } from "../helpers/getCurrencyExchange";
import styles from'./select.module.css'
export default function CurrencySelect({ setCurrency }) {
  const currencyArray = getCurrencyExchange();

  const currencyChange = React.useCallback(
    (e) => {
      const current = e.target.value;

      currencyArray.find((el) => {
        if (el.name === current) {
          setCurrency(el.name);
        }
      });
    },
    [currencyArray, setCurrency]
  );

  return (
    <select id="currency" name="currency" onChange={(e) => currencyChange(e)} className={styles.currencySelect}>
      <option value="uah">UAH</option>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
    </select>
  );
}
