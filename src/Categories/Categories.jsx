// import { isBlock } from "typescript";
import { useState} from "react";
// import { Formik, Field, Form } from "formik";
import { useSelector } from "react-redux";
import { useCategories } from "../helpers/useCategories";

import AddNewCategories from "./NewCategories/AddNewCategories";
export default function Categories({ currency, type }) {
  const { categories } = useSelector((state) => state.categories);
  const [expenseCategories, setExpenseCategories] = useState();

  useCategories(categories, currency, setExpenseCategories, type);

  return (
    <div>
      {" "}
      {expenseCategories}
      <AddNewCategories type={type} />
    </div>
  );
}
