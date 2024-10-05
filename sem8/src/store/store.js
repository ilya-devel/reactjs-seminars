import { configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./reduces/jokeSlice";
import convertationSlice from "./reduces/convertationSlice";


export const store = configureStore({
    reducer: {
        jokes: jokeSlice,
        currencies: convertationSlice
    }
})