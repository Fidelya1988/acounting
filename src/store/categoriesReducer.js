import { createSlice } from "@reduxjs/toolkit";
import { formatDiagnostic } from "typescript";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      { name: "Food", id: "1", type: "expense", sum: 0 },
      { name: "Rent", id: "2", type: "expense", sum: 0 },
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
    changeSum(state, action) {
     
      state.categories.forEach((el) =>
        el.name === action.payload.name ? (el.sum += Number(action.payload.sum)) : el
      );
    },
  },
});

export default categoriesSlice.reducer;
export const { addCategory, deleteCategory, changeSum } = categoriesSlice.actions;
