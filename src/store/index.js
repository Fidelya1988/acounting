import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import categoriesReducer from "./categoriesReducer";
import currencyReducer from "./currencyReducer";
const rootReducer = combineReducers({
    counter: counterReducer,
    categories: categoriesReducer,
    currency: currencyReducer
})

const store = configureStore({
    reducer: rootReducer
})

window.store= store;
export default store;