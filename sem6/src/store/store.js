import { configureStore } from "@reduxjs/toolkit";
import ToDoReduce from "../reduce/ToDoReduce";
import ProductReduce from "../reduce/ProductReduce";


export const store = configureStore({
    reducer: {
        todos: ToDoReduce,
        products: ProductReduce
    }
})