import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    coefficient: 1,
    categories: [
      {
        name: "Food",
        id: "1",
        type: "expense",
        sum: [
          { name: "uah", ratio: 1, sum: 0 },
          { name: "usd", ratio: 26.9, sum: 0 },
          { name: "euro", ratio: 31.56, sum: 0 },
        ],
      },
      {
        name: "Rent",
        id: "2",
        type: "expense",
        sum: [
          { name: "uah", ratio: 1, sum: 0 },
          { name: "usd", ratio: 26.9, sum: 0 },
          { name: "euro", ratio: 31.56, sum: 0 },
        ],
      },
    ],
  },
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload.newCategory);
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (el) => el.id !== action.payload.id
      );
    },
    setCoeff(state, action) {
      state.coefficient = action.payload.coefficient;
    },
    changeSum(state, action) {
      state.categories.forEach((el) =>
        el.name === action.payload.name
          ? (el.sum += Number(action.payload.sum) * Number(el.coefficient))
          : el
      );
    },
  },
});

export default categoriesSlice.reducer;
export const { addCategory, deleteCategory, changeSum, setCoeff } =
  categoriesSlice.actions;
