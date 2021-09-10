import React from "react";
import { sliceSum } from "./sliceSum";

export const useCategories = (
  categories,
  currency,
  setter,
  type,
  currencyIcon
) => {
  React.useEffect(() => {
    const categoriesArr = categories.map((c) => {
      const currentSum = c.sum.map((el) => {
        console.log(currency + el.name);
        return el.name === currency && el.sum;
      });

      const slicedCurrentSum = currentSum.map((el) =>
        typeof el === "number" ? sliceSum(String(el)) : el
      );

      return (
        c.type === type && (
          <div key={c.id}>
            {c.name}: {slicedCurrentSum} {currencyIcon}
          </div>
        )
      );
    });
    setter(categoriesArr);
  }, [categories, currency, setter, type, currencyIcon]);
};
