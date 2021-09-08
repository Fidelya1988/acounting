import { createSlice } from "@reduxjs/toolkit";
import { getSum } from "../helpers/getSum";
const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    income: [
      { name: "uah", ratio: 1, sum: 0 },
      { name: "usd", ratio: 26.9, sum: 0 },
      { name: "euro", ratio: 31.56, sum: 0 },
    ],
    expense: [
      { name: "uah", ratio: 1, sum: 0 },
      { name: "usd", ratio: 26.9, sum: 0 },
      { name: "euro", ratio: 31.56, sum: 0 },
    ],
  },
  reducers: {
    changeIncome(state, action) {
      state.income = getSum(action.payload.data, state.income);
    },

    changeExpense(state, action) {
      state.expense = getSum(action.payload.data, state.expense);
    },
  },
});
console.log(toolkitSlice);
export default toolkitSlice.reducer;
export const { changeIncome, changeExpense, replaceIncome } =
  toolkitSlice.actions;
