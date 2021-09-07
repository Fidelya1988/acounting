import { createSlice } from "@reduxjs/toolkit";


const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currentCurrency: 'uah',
    exchangeRates: {uah: 26.9, usd: 1}
  },
  reducers: {
    setCurrency(state, action) {
      state.currentCurrency= action.payload.currency
    },
   
  },
});

export default currencySlice.reducer;
export const { setCurrency } = currencySlice.actions;
