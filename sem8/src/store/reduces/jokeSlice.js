import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const apiUrl = 'https://api.chucknorris.io/jokes/random'

export const fetchJoke = createAsyncThunk(
    'jokes/fetchJoke',
    async (apiUrl, thunkApi) => {
        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error("404 Page not found")
            }

            const data = await response.json()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }

)

const initialState = {
    loading: false,
    joke: '',
    error: null
}

const jokeSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJoke.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchJoke.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.joke = action.payload.value
            })
            .addCase(fetchJoke.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.message
            })
    }
});

export const { fetchJokeRequest, fetchJokeFailure, fetchJokeSuccess } = jokeSlice.actions

export default jokeSlice.reducer