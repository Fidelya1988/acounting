// import { isBlock } from "typescript";
import React, { useState, useCallback, useContext } from "react";
import styles from "./form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeIncome, changeExpense } from "../store/counterReducer";
import { changeCategory } from "../store/categoriesReducer";
import { Formik, Form, Field } from "formik";
import { currencyContext } from "../App";
import CategiriesSelect from "./Inputs/CategoriesSelect";
import TypeRadioButton from "./Inputs/TypeRadioButton";
export default function CountingForm() {
  const { currencyIcon, currency } = useContext(currencyContext);

  const dispatch = useDispatch();

  const [type, setType] = useState("income");

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
          <TypeRadioButton value="expense" setType={setType} />
          <TypeRadioButton value="income" setType={setType} />
        </div>
        <CategiriesSelect type={type} />

        <button type="submit" className={styles.submit}>
          Count
        </button>
      </Form>
    </Formik>
  );
}
