import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './ThemeReduce'

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer
    }
})