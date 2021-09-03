import {  createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: { income: 0, expense: 0 },
  reducers:{
    changeIncome(state,action) {
      const incomeChanging =Number(action.payload.data)
      state.income = state.income + incomeChanging;
    },
    changeExpense(state,action) {
      const expesneChanging =Number(action.payload.data)
   state.expense  += expesneChanging;
    }
  }
});
console.log(toolkitSlice)
export default toolkitSlice.reducer
export const  {changeIncome, changeExpense} = toolkitSlice.actions