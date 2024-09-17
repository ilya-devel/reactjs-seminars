import { configureStore } from "@reduxjs/toolkit"
import theme from './theme/toggleTheme'

export default configureStore({
    reducer: {
        theme,
    },
})