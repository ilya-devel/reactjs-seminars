import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
// import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { toggleToDo } from "../../reduce/ToDoReduce";
import './ListToDo.sass'
import { useEffect } from "react"
import { fetchToDo } from "../../reduce/ToDoReduce"


export default function ListToDo() {
    const { todos, loading, error } = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchToDo())
    }, [dispatch])

    // console.log(todos)
    return <>
        <h2>List Tasks</h2>
        {loading && <p>Загрузка</p>}
        {error && <p>Ошибка: {error}</p>}

        <div className="tasks">
            {todos.map(task =>
                <div className={'task ' + (task.isCompleted ? 'completed' : 'uncompleted')} key={task.id}>
                    <div>{task.title}</div>
                    <div className="buttons">
                        <IconButton aria-label='toggle task' onClick={() => dispatch(toggleToDo(task.id))}>
                            <CheckIcon />
                        </IconButton>
                        {/* <IconButton aria-label='remove task' onClick={() => dispatch(removeToDo(task.id))}>
                            <DeleteIcon />
                        </IconButton> */}
                    </div>
                </div>)}
        </div>


    </>
}