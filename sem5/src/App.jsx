import './App.css'
import { SwitchTheme } from './components/SwitchTheme/SwitchTheme'
import { UserInput } from './components/UserInput/UserInput'
import { ThemeContext } from './contextes/ThemeContext/ThemeContext'
import { UserContext } from './contextes/UserContext/UserContext'
import { useState } from 'react'

function App() {
    const [userName, setUserName] = useState('Guest')
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(() => theme === 'light' ? 'dark' : 'light')

    return (<>
        <ThemeContext.Provider value={{
            theme, toggleTheme
        }}>
            <UserContext.Provider value={{
                userName, setUserName
            }}>
                <div className={theme}>
                    <SwitchTheme />
                    <br />
                    <UserInput />
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>

    </>
    )
}

export default App
