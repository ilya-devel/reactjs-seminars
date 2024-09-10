import { Button } from "@mui/material"
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const upCount = () => setCount(prevCount => prevCount + 1)

    const downCount = () => setCount(prevCount => prevCount - 1)

    return <>
        <h4>Counter: {count}</h4>
        <Button variant="outlined" onClick={upCount} >+1</Button>
        <Button variant="outlined" onClick={downCount} disabled={count <= 0} >-1</Button >
    </>
}