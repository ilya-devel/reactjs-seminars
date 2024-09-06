import { useEffect, useState } from "react"

const Timer = () => {
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const timerIn = setTimeout(() => setTimer(timer => timer + 1), 1000)
        return () => clearTimeout(timerIn)
    }, [timer])

    return <>
        <h3>{timer}</h3>
    </>
}

export default Timer