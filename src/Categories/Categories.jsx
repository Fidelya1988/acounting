// import { isBlock } from "typescript";
import { useState } from "react";

import { useSelector } from "react-redux";

import { useCategories } from "../helpers/useCategories";

export default function Categories({ currency }) {
  const { categories } = useSelector((state) => state.categories);
  const [expenseCategories, setExpenseCategories] = useState();
  useCategories(categories, currency, setExpenseCategories);

  return (
    <div>
      {" "}
      {expenseCategories}
      <button>+</button>
    </div>
  );
}
