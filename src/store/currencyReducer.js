import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currentCurrency: "uah",
    exchangeRates: [
      { name: "uah", ratio: 1, active: true, },
      { name: "usd", ratio: 26.9, active: false },
      { name: "euro", ratio: 31.56, active: false },
    ],
  },
  reducers: {
    setCurrency(state, action) {
      state.currentCurrency = action.payload.data;
    },
    setExchangeRates(state, action) {
      state.exchangeRates = state.exchangeRates.map((el) =>
        el.name === action.payload.data
          ? { ...el, active: true }
          : { ...el, active: false }
      );
    },
  },
});

export default currencySlice.reducer;
export const { setCurrency, setExchangeRates } = currencySlice.actions;
