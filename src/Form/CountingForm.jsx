// import { isBlock } from "typescript";
import React, { useState, useCallback, useContext } from "react";
import styles from "./form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeIncome, changeExpense } from "../store/counterReducer";
import { changeCategory } from "../store/categoriesReducer";
import { Formik, Form, Field } from "formik";

import { currencyContext } from "../App";

export default function CountingForm() {
  const { currencyIcon, currency } = useContext(currencyContext);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [type, setType] = useState('income');

  const handleSubmit = React.useCallback(
    (introduce, category, type) => {
      type === "expense" &&
        dispatch(changeExpense({ data: introduce, currency }));
      type === "income" &&
        dispatch(changeIncome({ data: introduce, currency }));
      dispatch(
        changeCategory({ name: category, sum: introduce, currency, type })
      );
    },
    [dispatch, currency]
  );

  const handleType = useCallback(
    (e) => {
      setType(e.target.value);
    },
    [setType]
  );
  const select = categories.map((c) => {
    console.log(type+c.type)
    return (
      c.type === type && (
        <option key={c.id} id={c.id} value={c.name}>
          {c.name}
        </option>
      )
    );
  });
  console.log(select);
  return (
    <Formik
      initialValues={{
        introduce: 0,

        category: "Without",
        type: "income",
      }}
      onSubmit={(values) => {
        const { introduce, category, type } = values;
        handleSubmit(introduce, category, type);
      }}
    >
      <Form>
        <div>
          <Field
            type="number"
            id="introduce"
            name="introduce"
            className={styles.input}
          />{" "}
          <span className={styles.currency}>{currencyIcon}</span>
        </div>

        <div>
          <label>
            <Field
              type="radio"
              name="type"
              value="expense"
              onClick={handleType}
            />
            Expense
          </label>
          <label>
            <Field
              type="radio"
              name="type"
              value="income"
              onClick={handleType}
            />
            Income
          </label>
        </div>
        <div>
          {" "}
          <label>
            <span>Category</span>
            <Field
              component="select"
              id="category"
              name="category"
              className={styles.categorySelect}
            >
              <option value="Without">Without category</option>
              {select}
            </Field>
          </label>
        </div>
        <button type="submit" className={styles.submit}>
          Count
        </button>
      </Form>
    </Formik>
  );
}
