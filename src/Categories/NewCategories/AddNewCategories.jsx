// import { isBlock } from "typescript";
import { useState, useCallback } from "react";
// import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { addCategory } from "../../store/categoriesReducer";
import { getCurrencyExchange } from "../../helpers/getCurrencyExchange";


export default function AddNewCategories({ type }) {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    setShowInput(true);
  }, [setShowInput]);
  const handleBlur = useCallback(
    (e) => {
      const sum = getCurrencyExchange();
      const id = String(Math.floor(Math.random() * 200));

      dispatch(addCategory({ name: e.target.value, id, type, sum }));
      setShowInput(false);
    },
    [dispatch, setShowInput]
  );
  return (
    <>
      {!showInput && <button onClick={handleClick}>+</button>}
      {showInput && (
        <input
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
      )}
    </>
  );
}
