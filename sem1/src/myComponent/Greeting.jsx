const Greeting = () => {
    const hour = new Date().getHours
    switch (true) {
        case hour > 5 && hour <= 10:
            return <h1>Good Morning</h1>
        case hour > 10 && hour <= 16:
            return <h1>Good Day</h1>
        case hour >16 && hour < 22:
            return <h1>Good Evening</h1>
        default:
            return <h1>Good Night</h1>
    }
}

export default Greeting;