import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms));

export const fetchToDo = createAsyncThunk(
    'todos/fetchToDo',
    async (thunkApi) => {
        try {
            await sleep(5000)
            const response = await fetch('./tasks.json')
            console.log('response: ', response.toString())
            if (!response.ok) {
                throw new Error('Something do wrong')
            } else {
                return await response.json()
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const initialState = {
    todos: [],
    loading: false,
    error: null
}

const ToDoReduce = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => state.todos = [...state.todos, {
            id: Date.now(),
            title: action.payload,
            isCompleted: false
        }],
        removeToDo: (state, action) => state.todos = state.todos.filter(todo => todo.id != action.payload),
        toggleToDo: (state, action) => void (state.todos.map(task => {
            if (task.id === action.payload) {
                task.isCompleted = !task.isCompleted
            }
            return task
        }))
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDo.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchToDo.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.todos = action.payload
            })
            .addCase(fetchToDo.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || action.error
            })
    }
});

export const { fetchToDoRequest, fetchToDoFailure, fetchToDoSuccess, addToDo, removeToDo, toggleToDo } = ToDoReduce.actions

export default ToDoReduce.reducer