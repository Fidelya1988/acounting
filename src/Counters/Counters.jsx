// import { isBlock } from "typescript";
import { useState } from "react";
import styles from "../app.module.css";
import { useSelector } from "react-redux";

import Categories from "../Categories/Categories";
import { useNewSum } from "../helpers/useNewSum";

const Counter = ({ title, currency, counting, sum, sumSetter }) => {
  useNewSum(sum, currency, sumSetter);
  return (
    <div className={styles.block}>
      <h1>{title}</h1>
      <span> {counting ? counting : 0}</span> {currency}
      <Categories currency={currency} />
    </div>
  );
};
export default function Counters({ currency }) {
  const { income, expense } = useSelector((state) => state.toolkit);
  const [newIncome, setNewIncome] = useState();

  const [newExpense, setNewExpense] = useState();

  return (
    <>
      <Counter
        title="Incomes"
        currency={currency}
        counting={newIncome}
        sum={income}
        sumSetter={setNewIncome}
      />
      <Counter
        title="Expenses"
        currency={currency}
        counting={newExpense}
        sum={expense}
        sumSetter={setNewExpense}
      />
    </>
  );
}
