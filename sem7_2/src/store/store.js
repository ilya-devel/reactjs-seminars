import { configureStore } from "@reduxjs/toolkit";
import ToDoReduce from "../reduce/ToDoReduce";
import ProductReduce from "../reduce/ProductReduce";
import { logger } from "../middleware/logger";
import UserReduce from "../reduce/UserReduce";

export const store = configureStore({
    reducer: {
        todos: ToDoReduce,
        products: ProductReduce,
        users: UserReduce
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        logger,
    ]
})