import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const apiUrl = 'https://api.chucknorris.io/jokes/random'

export const fetchConvertation = createAsyncThunk(
    'convertation/fetchConvertation',
    async (_, thunkApi) => {
        try {
            const response = await fetch('https://v6.exchangerate-api.com/v6/424b3167063bed29d76a23f2/latest/RUB')
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
    amount: 0,
    currency: '',
    result: 0,
    loading: false,
    error: null,
    currencies: []
}



const jokeSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload
        },
        setCurrency: (state, action) => {
            state.currency = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConvertation.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchConvertation.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.result = state.amount * action.payload.conversion_rates[state.currency]
                state.currencies = Object.keys(action.payload.conversion_rates)
            })
            .addCase(fetchConvertation.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.message
            })
    }
});

export const { fetchJokeRequest, fetchJokeFailure, fetchJokeSuccess, setAmount, setCurrency } = jokeSlice.actions

export default jokeSlice.reducer