import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import categoriesReducer from "./categoriesReducer";
const rootReducer = combineReducers({
    toolkit: toolkitReducer,
    categories: categoriesReducer
})

const store = configureStore({
    reducer: rootReducer
})

window.store= store;
export default store;