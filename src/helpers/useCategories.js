import React from "react";
import { sliceSum } from "./sliceSum";
const style = {
  button: {
    border: "1px solid rgb(27, 112, 161)",
    paddingBottom: "0.55rem",
    background: "rgb(27, 112, 161)",
    width: "1rem",
    height: "1rem",
    color: "white",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.6rem",
    fontWeight: "400",
    borderRadius: "0.2rem",
  },
  content: {
    fontSize: "1.2rem",
  },
};
export const useCategories = (
  categories,
  currency,
  setter,
  type,
  currencyIcon,
  handleDelete
) => {
  React.useEffect(() => {
    const categoriesArr = categories.map((c) => {
      const currentSum = c.sum.map((el) => {
        return el.name === currency && el.sum;
      });

      const slicedCurrentSum = currentSum.map((el) =>
        typeof el === "number" ? sliceSum(String(el)) : el
      );

      return (
        c.type === type && (
          <div key={c.id} >
            <span style={style.content}>{c.name}: {slicedCurrentSum} {currencyIcon}{" "}</span>
            <button onClick={() => handleDelete(c.id)} style={style.button}>
              -
            </button>
          </div>
        )
      );
    });
    setter(categoriesArr);
  }, [categories, currency, setter, type, currencyIcon, handleDelete]);
};
