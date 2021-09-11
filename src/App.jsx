// import { isBlock } from "typescript";
import { useState, createContext } from "react";
import styles from "./app.module.css";
import CountingForm from "./Form/CountingForm";
import CurrencySelect from "./CurrencySelect/CurrencySelect";
import Counters from "./Counters/Counters";
import { useCurrencyIcon } from "./helpers/useCurrencyIcon";
export const currencyContext = createContext()
function App() {
  const [currency, setCurrency] = useState("uah");
  const [currencyIcon, setCurrencyIcon] = useState("₴");
  useCurrencyIcon(currency, setCurrencyIcon)
  return (
    <currencyContext.Provider value = {{currencyIcon, currency}}>
    <div className={styles.app}>
      
      <CountingForm currency={currency} />
     
      <CurrencySelect setCurrency={setCurrency} />
      <Counters currency={currency} />
      
    </div>
    </currencyContext.Provider>
  );
}

export default App;
