import { Button, TextField } from '@mui/material'
import './TemperatureConverter.sass'
import { useEffect, useState } from 'react'

export default function TemperatureConverter() {
    const [cell, setCell] = useState(0)
    const [far, setFar] = useState(32)

    useEffect(() => {
        setFar(() => (cell * (9 / 5)) + 32)
    }, [cell])

    useEffect(() => {
        setCell(() => (far - 32) / (9 / 5))
    }, [far])

    return <div className='temperatureConverter'>
        <h3>TemperatureConverter</h3>
        <TextField id="outlined-basic" label="Цельсии" variant="outlined" value={cell} onChange={(e) => setCell(() => e.target.value)} />
        <TextField id="outlined-basic" label="Фаренгейты" variant="outlined" value={far} onChange={(e) => setFar(() => e.target.value)} />
        <Button variant="outlined" onClick={() => {
            setCell(0)
            setFar(32)
        }}>Очистить</Button>
    </div>
}