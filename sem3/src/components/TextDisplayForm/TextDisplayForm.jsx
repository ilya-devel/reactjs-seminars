import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function TextDisplayForm() {
    const [text, setText] = useState("")
    const [showText, setShowText] = useState('')
    const showTextFunc = () => {
        setShowText(text)
        setText('')
    }
    return <>
        <TextField fullWidth label="Введите текст" id="fullWidth" onChange={e => {
            setText(e.target.value)
        }}
            value={text} />
        <Button variant="contained" onClick={showTextFunc}>Отобразить текст</Button>
        <Card sx={{ mt: 4 }}>
            <CardContent>
                <Typography variant="h5">{showText}</Typography>
            </CardContent>
        </Card>
    </>
}