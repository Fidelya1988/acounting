import { createSlice } from "@reduxjs/toolkit";
import { getSum } from "../helpers/getSum";
import { getCurrencyExchange } from "../helpers/getCurrencyExchange";
const income = getCurrencyExchange();
const expense = getCurrencyExchange();

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    income,
    expense,
  },
  reducers: {
    changeIncome(state, action) {
  
      state.income = getSum(
        action.payload.data,
        state.income,
        action.payload.currency
      );
    },

    changeExpense(state, action) {
      state.expense = getSum(
        action.payload.data,
        state.expense,
        action.payload.currency
      );
    },
  },
});

export default counterSlice.reducer;
export const { changeIncome, changeExpense, replaceIncome } =
  counterSlice.actions;
