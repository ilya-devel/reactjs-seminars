import { configureStore } from "@reduxjs/toolkit";
import ToDoReduce from "../reduce/ToDoReduce";
import { logger } from "../middleware/logger";



export const store = configureStore({
    reducer: {
        todos: ToDoReduce,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        logger,
    ]
})