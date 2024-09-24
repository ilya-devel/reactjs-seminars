import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (id, thunkApi) => {
        try {
            let response = null
            if (id) {
                response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
            } else {
                response = await fetch('https://jsonplaceholder.typicode.com/users')
            }
            if (!response.ok) {
                throw new Error('Something do wrong')
            } else {
                return await response.json()
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }

    })

const initialState = {
    users: [],
    loading: false,
    error: null
}

const UserReduce = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
});

export const { fetchUsersRequest, fetchUsersFailure, fetchUsersSuccess } = UserReduce.actions

export default UserReduce.reducer