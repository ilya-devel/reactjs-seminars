import { useState } from 'react'
import './TodoList.sass'
import { TextField, Button, Card, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {
    const [lstTasks, setLstTasks] = useState([
        {
            id: crypto.randomUUID(),
            task: 'Тестовая задача'
        }
    ])
    const [newTask, setNewTask] = useState('')

    const addNewTask = () => {
        if (newTask !== '') {
            setLstTasks(() => [
                ...lstTasks,
                {
                    id: crypto.randomUUID(),
                    task: newTask
                }
            ])
            setNewTask(() => '')
        }
    }

    const removeTask = (id) => {
        setLstTasks(prevLstTasks => prevLstTasks.filter(task => task.id !== id))
    }

    return <div className="todoList">
        <h3>TodoList</h3>
        <TextField id="outlined-basic" label="Новая задача" variant="outlined" value={newTask} onChange={e => setNewTask(() => e.target.value)} onKeyDown={e => {
            if (e.key === 'Enter')
                addNewTask()
        }}/>
        <Button variant="outlined" onClick={addNewTask}>Сохранить</Button>
        <br />
        {lstTasks.map(task => {
            return <Card key={task.id} id={task.id} className='taskCard'>
                <CardContent>
                    <Typography variant="p" component="div">
                        {task.task}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label='remove task' onClick={() => removeTask(task.id)}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        })}
    </div>
}