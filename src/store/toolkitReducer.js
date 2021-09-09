import { createSlice } from "@reduxjs/toolkit";
import { getSum } from "../helpers/getSum";
import { getCurrencyExchange } from "../helpers/getCurrencyExchange";
const income = getCurrencyExchange();
const expense = getCurrencyExchange();
console.log(income);
const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    income,
    expense,
  },
  reducers: {
    changeIncome(state, action) {
      console.log(action.payload);
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

export default toolkitSlice.reducer;
export const { changeIncome, changeExpense, replaceIncome } =
  toolkitSlice.actions;
