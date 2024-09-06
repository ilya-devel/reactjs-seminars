import { useRef, useState } from "react"
import ShowList from "./ShowList"

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')
    const taskField = useRef(null)

    const addTask = () => {
        if (newTask != '') {
            setTodoList([...todoList, newTask])
            setNewTask('')
            taskField.current.value = ''
        }
    }



    return <>
        <p>Новая задача:</p>
        <input type="text" ref={taskField} onChange={(e) => { setNewTask(e.target.value) }} />
        <button onClick={addTask}>Сохранить</button>
        <p>Список задач</p>
        <ShowList lst={todoList}/>
    </>
}

export default TodoList