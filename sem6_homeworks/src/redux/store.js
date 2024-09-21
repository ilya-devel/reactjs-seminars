import { configureStore } from "@reduxjs/toolkit";
import ProductReduces from "./reduces/ProductReduces";

const store = configureStore({
    reducer: {
        products: ProductReduces,
        tmp: ProductReduces
    }
})

export default store