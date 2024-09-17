import './App.css'
import ToggleTheme from './components/ToggleTheme'

import { useSelector } from 'react-redux'


function App() {
    const theme = useSelector((state) => state.darkTheme)
    return <div className={theme.darkTheme ? 'dark' : 'light'}>
        <ToggleTheme />
        <h1>HELLO</h1>
    </div>
}

export default App
