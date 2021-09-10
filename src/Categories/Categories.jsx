// import { isBlock } from "typescript";
import { useState, useContext} from "react";
// import { Formik, Field, Form } from "formik";
import { useSelector } from "react-redux";
import { useCategories } from "../helpers/useCategories";
import { currencyContext } from "../App";
import AddNewCategories from "./NewCategories/AddNewCategories";
export default function Categories({  type }) {
  const { categories } = useSelector((state) => state.categories);
  const [expenseCategories, setExpenseCategories] = useState();
const {currency, currencyIcon} = useContext(currencyContext)
  useCategories(categories, currency, setExpenseCategories, type,currencyIcon );

  return (
    <div>
      {" "}
      {expenseCategories}
      <AddNewCategories type={type} />
    </div>
  );
}
