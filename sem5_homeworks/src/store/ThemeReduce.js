const TOGGLE_THEME = "TOGGLE_THEME"

export const toggleTheme = () => ({ type: TOGGLE_THEME })

const initialTheme = {
    darkTheme: false
}

export const themeReducer = (state = initialTheme, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, darkTheme: !state.darkTheme }
        default:
            return state
    }
}