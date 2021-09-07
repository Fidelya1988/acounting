// import { isBlock } from "typescript";
import React from "react";
import styles from "./app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeIncome, changeExpense } from "./store/toolkitReducer";
import { changeSum } from "./store/categoriesReducer";
import { setCurrency } from "./store/currencyReducer";
function App() {
  const dispatch = useDispatch();
  const { income, expense } = useSelector((state) => state.toolkit);
  const { categories } = useSelector((state) => state.categories);
  const { currentCurrency, exchangeRates } = useSelector(
    (state) => state.currency
  );
  const prevCurrencyRef = React.useRef();
  React.useEffect(() => {
    prevCurrencyRef.current = currentCurrency;
  }, [currentCurrency]);

  const prevCurrency = prevCurrencyRef.current;
  React.useEffect(() => {
    if (prevCurrency === "usd" && currentCurrency === "uah") {
      {
        dispatch(changeIncome({ data: Math.floor(income * exchangeRates.uah) }));
        dispatch(changeExpense({ data: income * exchangeRates.uah }));
      }
    }

    prevCurrency === "uah" &&
      currentCurrency === "usd" &&
      dispatch(changeIncome({ data: income / exchangeRates.uah }));
    console.log(exchangeRates.uah);
  }, [prevCurrency, currentCurrency, dispatch, exchangeRates, income]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    const { introduce, currency, category, type } = values;

    type === "expense" && dispatch(changeExpense({ data: introduce }));
    type === "income" && dispatch(changeIncome({ data: introduce }));
    dispatch(changeSum({ name: category, sum: introduce }));
    dispatch(setCurrency({ currency }));
  };
  const categoriesExspenses = categories.map(
    (c) =>
      c.type === "expense" && (
        <div key={c.id}>
          {c.name} : {c.sum} {currentCurrency}
        </div>
      )
  );
  const categoriesSelectExpense = categories.map(
    (c) =>
      c.type === "expense" && (
        <option key={c.id} id={c.id} value={c.name}>
          {c.name}
        </option>
      )
  );

  return (
    <div className={styles.app}>
      <form onSubmit={(e) => handleSubmit(e)} method="post" id="c-form">
        <>
          <div className={styles.introduce}>
            <label htmlFor="introduce">Sum</label>
            <input
              type="text"
              id="introduce"
              name="introduce"
              placeholder="0"
            />
            <select id="currency" name="currency">
              <option value="uah">UAH</option>
              <option value="usd">USD</option>
            </select>
          </div>
          <select id="category" name="category">
            <option accessKey="0" value="Without">
              Without category
            </option>
            {categoriesSelectExpense}
          </select>
          <div>
            <input type="radio" id="expense" name="type" value="expense" />
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" name="type" value="income" />
            <label htmlFor="income">Income</label>
          </div>
        </>

        <button type="submit" id="c-form">
          Count
        </button>
      </form>
      <div className={styles.block}>
        <h1>Incomes</h1>
        <span>{income}</span> {currentCurrency}
      </div>{" "}
      <div className={styles.block}>
        <h1>Expenses</h1>
        <span>{expense}</span> {currentCurrency}
        <div> {categoriesExspenses}</div>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
