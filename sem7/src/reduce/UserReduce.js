import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    loading: false,
    error: null
}

const UserReduce = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersRequest: (state) => {
            state.loading = true
            state.error = null
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.users = action.payload
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
});

export const { fetchUsersRequest, fetchUsersFailure, fetchUsersSuccess } = UserReduce.actions

export default UserReduce.reducer