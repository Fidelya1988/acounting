// import { isBlock } from "typescript";
import React from "react";
import styles from "./app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeIncome, changeExpense } from "./store/toolkitReducer";
import { changeSum } from "./store/categoriesReducer";
function App() {
  const dispatch = useDispatch();
  const { income, expense } = useSelector((state) => state.toolkit);
  const { categories } = useSelector((state) => state.categories);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeIncome({ data: e.target[0].value }));
    dispatch(changeExpense({ data: e.target[1].value }));
    dispatch(changeSum({ name: e.target[2].value, sum: e.target[1].value }));

    e.target[0].value = 0;
    e.target[1].value = 0;
  };
  const categoriesExspenses = categories.map(
    (c) =>
      c.type === "expense" && (
        <div key={c.id}>
          {c.name} : {c.sum} uah
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
  console.dir(categoriesSelectExpense);
  return (
    <div className={styles.app}>
      <form onSubmit={(e) => handleSubmit(e)} method="post" id="c-form">
      
        <>
          <div className={styles.introduce}>
          <label for="introduce">Sum</label>
          <input type="text" id="introduce" name="introduce" placeholder="0" /> 
          <select>
            <option value="uah">
             UAH
            </option>
            
          </select>
          </div>
          <select>
            <option accessKey="0" value="Without">
              Without category
            </option>
            {categoriesSelectExpense}
          </select>
          <div>
            <input type="radio" id="expense" name="type" value="expense" />
            <label for="expense">Expense</label>
            <input type="radio" id="income" name="type" value="income" />
            <label for="income">Income</label>
          </div>
        </>

        <button type="submit" id="c-form">
          Count
        </button>
      </form>
      <div className={styles.block}>
        <h1>Incomes</h1>
        <span>{income}</span> uah
      </div>{" "}
      <div className={styles.block}>
        <h1>Expenses</h1>
        <span>{expense}</span> uah
        <div> {categoriesExspenses}</div>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
