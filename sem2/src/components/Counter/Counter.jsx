import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const updateCount = () => {
        setCount(count + 1)
    }

    return <>
        <p>{count}</p>
        <button onClick={updateCount}>Click</button>
    </>
}

export default Counter