// import { isBlock } from "typescript";
import { useState, useContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCategories } from "../helpers/useCategories";
import { currencyContext } from "../App";
import AddNewCategories from "./NewCategories/AddNewCategories";
import { deleteCategory } from "../store/categoriesReducer";
export default function Categories({ type }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [expenseCategories, setExpenseCategories] = useState();
  const { currency, currencyIcon } = useContext(currencyContext);
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteCategory(id));
    },
    [dispatch, deleteCategory]
  );

  useCategories(
    categories,
    currency,
    setExpenseCategories,
    type,
    currencyIcon,
    handleDelete
  );

  return (
    <div>
      {" "}
      {expenseCategories}
      <AddNewCategories type={type} />
    </div>
  );
}
