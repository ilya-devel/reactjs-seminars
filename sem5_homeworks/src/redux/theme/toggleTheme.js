import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkTheme: false
}

const toggleTheme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.darkTheme = !state.darkTheme
        }
    }
});

export const { changeTheme } = toggleTheme.actions

export default toggleTheme.reducer