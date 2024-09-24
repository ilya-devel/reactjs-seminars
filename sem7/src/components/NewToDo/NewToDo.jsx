import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../reduce/ToDoReduce'
import './NewToDo.sass'

export default function NewToDo() {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        if (newTodo != '') {
            dispatch(addToDo(newTodo))
            setNewTodo('')
        }
    }

    return <>
        <div className="newTask">
            <TextField label="Новая задача" variant="outlined"
                onChange={e => setNewTodo(e.target.value)}
                value={newTodo} />
            <br />
            <Button variant="outlined" onClick={addTask}>Создать</Button>
        </div>
    </>
}