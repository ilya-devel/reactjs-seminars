import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const ToDoReduce = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => [...state, {
            id: Date.now(),
            text: action.payload,
            status: false
        }],
        removeToDo: (state, action) => { return state.filter(todo => todo.id != action.payload) },
        toggleToDo: (state, action) => void(state.map(task => {
            if(task.id === action.payload) {
                task.status = !task.status
            }
            return task
        }))
    }
});

export const { addToDo, removeToDo, toggleToDo } = ToDoReduce.actions

export default ToDoReduce.reducer