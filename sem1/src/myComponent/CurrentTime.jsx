// import ReactDOM from 'react-dom'
// import React, { Component } from 'react'

// class CurrentTime extends Component {

//     state = {}

//     render() {
//         return (
//             <p>Current Time: <span>{new Intl.DateTimeFormat('ru', { timeStyle: 'short' }).format(Date.now())}</span></p>
//         );
//     }
// }

// const CurrentTime = () => <p>Current Time: <span>{new Intl.DateTimeFormat('ru', { timeStyle: 'short' }).format(Date.now())}</span></p>
const CurrentTime = () => <p>Current Time: <span>{new Date().toLocaleTimeString()}</span></p>

export default CurrentTime;