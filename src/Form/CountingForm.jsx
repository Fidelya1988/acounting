// import { isBlock } from "typescript";
import React, { useState, useCallback } from "react";
import styles from "../app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeIncome, changeExpense } from "../store/toolkitReducer";
import { changeCategory } from "../store/categoriesReducer";

import { Formik, Form, Field } from "formik";
const validation = (values) => {
  const errors = {};
  values.introduce.match(!/[0-9]/) && (errors.introduce = "error");
};

export default function CountingForm({ currency }) {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);
  const [type, setType] = useState();

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
  const select = categories.map(
    (c) =>
      c.type === type && (
        <option key={c.id} id={c.id} value={c.name}>
          {c.name}
        </option>
      )
  );
 
  return (
    <Formik
      initialValues={{
        introduce: 0,

        category: "Without",
        type: "income",
      }}
      validat={validation}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        const { introduce, category, type } = values;
        handleSubmit(introduce, category, type);
      }}
    >
      <Form>
        <div className={styles.introduce}>
          <label htmlFor="introduce">Sum</label>
          <Field type="text" id="introduce" name="introduce" />

          {" " + currency.toUpperCase()}
          <Field component="select" id="category" name="category">
            <option value="Without">Without category</option>
            {select}
          </Field>
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
          <button type="submit">Count</button>
        </div>
      </Form>
    </Formik>
  );
}
