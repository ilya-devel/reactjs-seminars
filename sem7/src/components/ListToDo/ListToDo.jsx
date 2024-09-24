import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { removeToDo, toggleToDo } from "../../reduce/ToDoReduce";
import './ListToDo.sass'


export default function ListToDo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return <>
        <h2>List Tasks</h2>
        <div className="tasks">
            {todos.map(task =>
                <div className={'task ' + (task.status ? 'completed' : 'uncompleted')} key={task.id}>
                    <div>{task.text}</div>
                    <div className="buttons">
                        <IconButton aria-label='toggle task' onClick={() => dispatch(toggleToDo(task.id))}>
                            <CheckIcon />
                        </IconButton>
                        <IconButton aria-label='remove task' onClick={() => dispatch(removeToDo(task.id))}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>)}
        </div>


    </>
}