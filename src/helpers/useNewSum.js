import React from "react";
import { sliceSum } from "./sliceSum";
export const useNewSum = (array, currency, setNewValue) => {
    React.useEffect(() => {
      array.find((el) => {
        console.log(currency);
        if (el.name === currency) {
          const editedSum = sliceSum(String(el.sum));
          setNewValue(String(editedSum));
        }
      });
    }, [array, setNewValue, currency]);
  };