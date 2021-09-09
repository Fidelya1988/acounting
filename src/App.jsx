// import { isBlock } from "typescript";
import { useState } from "react";
import styles from "./app.module.css";

import CountingForm from "./Form/CountingForm";

import CurrencySelect from "./CurrencySelect/CurrencySelect";
import Counters from "./Counters/Counters";

function App() {
  const [currency, setCurrency] = useState("uah");

  return (
    <div className={styles.app}>
      <CountingForm currency={currency} />
      <CurrencySelect setCurrency={setCurrency} />
      <Counters currency={currency} />
    </div>
  );
}

export default App;
