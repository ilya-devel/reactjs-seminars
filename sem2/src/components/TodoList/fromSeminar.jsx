import { useEffect, useState } from "react";

function TodoList({ title }) {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([])

    const updateText = (e) => {
        setValue(e.target.value);
    }
    const addList = () => {
        if (value.trim() === '') {
            return;
        }
        // const newArray = [...messages, { value, id: Date.now()}]; // value: value
        const newArray = [...messages, { value, id: crypto.randomUUID()}]; // value: value
        setMessages(newArray);
        setValue('');
    }

    return (

        <div>
            <input type="text" placeholder="Введите текст" onChange={updateText} value={value}></input>
            <button onClick={addList}>Ввести данные</button>
            <ul>{title}</ul>
            {messages.map((mess) =>
                <li key={mess.id}>{mess.value}</li>)}
        </div>
    );
}
export default TodoList;