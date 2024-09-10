import { Button, TextField } from "@mui/material"
import { useState } from "react"
import ShowMessages from "./ShowMessages"

export const MessageList = () => {
    const [messageList, setMessageList] = useState([{
        id: crypto.randomUUID(),
        message: "Test message"
    }])
    const [message, setMessage] = useState('')

    const addNewMessage = () => {
        setMessageList((prevMessageList) => {
            return [...prevMessageList,
            {
                id: crypto.randomUUID(),
                message: message
            }
            ]
        })
        setMessage('')
    }

    return <>
        <p>MessageList</p>
        <TextField id="newMessageInput"
            label="Новое сообщение"
            variant="filled"
            color="success"
            value={message}
            onChange={(e) => setMessage(() => e.target.value)} />
        <Button variant="outlined" onClick={addNewMessage}  >Отправить</Button>
        <br />
        <h2>Список сообщений</h2>
        <div className="boxMessages">
            <ShowMessages listMessages={messageList} />
        </div>
    </>
}