import { useState } from "react";

export const TextInput = () => {
    const [text, setText] = useState('')
    const updateText = (event) => {
        setText(event.target.value)

    }
    return <>
        <p>{text}</p>
        <br />
        <input type="text" onChange={updateText} />

    </>
}