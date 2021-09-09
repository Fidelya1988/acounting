import { createSlice } from "@reduxjs/toolkit";
import { getSum } from "../helpers/getSum";
import { getCurrencyExchange } from "../helpers/getCurrencyExchange";
const foodSum = getCurrencyExchange();
const rentSum = getCurrencyExchange();
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
   
    categories: [
      {
        name: "Food",
        id: "1",
        type: "expense",
        sum: foodSum,
      },
      {
        name: "Rent",
        id: "2",
        type: "expense",
        sum: rentSum,
      },
    ],
  },
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (el) => el.id !== action.payload.id
      );
    },
  
    changeCategory(state, action) {
      state.categories.forEach((el) =>
        el.name === action.payload.name && el.type === action.payload.type
          ? (el.sum = getSum(
              action.payload.sum,
              el.sum,
              action.payload.currency
            ))
          : el
      );
    },
  },
});

export default categoriesSlice.reducer;
export const { addCategory, deleteCategory, changeCategory } =
  categoriesSlice.actions;
