import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import categoriesReducer from "./categoriesReducer";
import currencyReducer from "./currencyReducer";
const rootReducer = combineReducers({
    toolkit: toolkitReducer,
    categories: categoriesReducer,
    currency: currencyReducer
})

const store = configureStore({
    reducer: rootReducer
})

window.store= store;
export default store;