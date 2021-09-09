 import React from "react";
 import { sliceSum } from "./sliceSum";
export const useCategories = (categories, currency, setter, type) => {
  console.log(type)
    React.useEffect(() => {
      const categoriesArr = categories.map((c) => {
        const currentSum = c.sum.map((el) => el.name === currency && el.sum);
       const slicedCurrentSum = currentSum.map(el=> typeof el==='number'?sliceSum(String(el)): el) ;
        return (
          c.type === type && (
            <div key={c.id}>
              {c.name}: {slicedCurrentSum} {currency}
            </div>
          )
        );
      });
      setter(categoriesArr);
    }, [categories, currency, setter,type]);
  };
  