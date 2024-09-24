import { configureStore } from "@reduxjs/toolkit";
import ToDoReduce from "../reduce/ToDoReduce";
import ProductReduce from "../reduce/ProductReduce";
import { logger } from "../middleware/logger";
import createSagaMiddleware from 'redux-saga';
import UserReduce from "../reduce/UserReduce";
import usersSaga from "../sagas/usersSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todos: ToDoReduce,
        products: ProductReduce,
        users: UserReduce
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        logger,
        sagaMiddleware
    ]
})
sagaMiddleware.run(usersSaga)