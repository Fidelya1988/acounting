// import { isBlock } from "typescript";
import { useState, useContext } from "react";
import styles from "../app.module.css";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import { useNewSum } from "../helpers/useNewSum";
import { currencyContext } from "../App";
const Counter = ({ title, currency, counting, sum, sumSetter, type }) => {
 const {currencyIcon} = useContext(currencyContext)
  useNewSum(sum, currency, sumSetter);
  return (
    <div className={styles.block}>
      <h1>{title}</h1>
      <span> {counting ? counting : 0}</span> {currencyIcon}
      <Categories  type = {type} />
    </div>
  );
};
export default function Counters({ currency }) {
  const { income, expense } = useSelector((state) => state.counter);
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
        type= 'income'
      />
      <Counter
        title="Expenses"
        currency={currency}
        counting={newExpense}
        sum={expense}
        sumSetter={setNewExpense}
        type= 'expense'
      />
    </>
  );
}
