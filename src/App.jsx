// import { isBlock } from "typescript";
import React, { useState } from "react";
import styles from "./app.module.css";
import { useSelector} from "react-redux";
import CountingForm from "./Form/CountingForm";
import { setCoeff } from "./store/categoriesReducer";
const sliceSum = (sum) => {
  const i = sum.indexOf(".");
  return i !== -1 ? sum.slice(0, i + 3) : sum;
};
const useNewSum = (array, currency, setNewValue, sliceSum) => {
  React.useEffect(() => {
    array.find((el) => {
      console.log(currency);
      if (el.name === currency) {
        const editedSum = sliceSum(String(el.sum));
        setNewValue(String(editedSum));
      }
    });
  }, [array, setNewValue, currency, sliceSum]);
};
function App() {
  const { income, expense } = useSelector((state) => state.toolkit);
  const { categories} = useSelector((state) => state.categories);
  const [currency, setCurrency] = useState("uah");
  const [newIncome, setNewIncome] = useState();
  const [newExpense, setNewExpense] = useState();

  const categoriesExspenses = categories.map(
    (c) =>
      c.type === "expense" && (
        <div key={c.id}>
          {c.name} 
        </div>
      )
  );

  const currencyChange = React.useCallback(
    (e) => {
      const current = e.target.value;

      income.find((el) => {
        if (el.name === current) {
          setCurrency(el.name);
        }
      });
    },
    [income, setCurrency]
  );
  useNewSum(income, currency, setNewIncome, sliceSum);
  useNewSum(expense, currency, setNewExpense, sliceSum);
  return (
    <div className={styles.app}>
      <CountingForm />
      <div className={styles.block}>
        <select
          id="currency"
          name="currency"
          onChange={(e) => currencyChange(e)}
        >
          <option value="uah">UAH</option>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
        </select>
        <h1>Incomes</h1>
        <span>{newIncome ? newIncome : 0}</span> {currency}
      </div>{" "}
      <div className={styles.block}>
        <h1>Expenses</h1>
        <span> {newExpense ? newExpense : 0}</span> {currency}
        <div> {categoriesExspenses}</div>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
