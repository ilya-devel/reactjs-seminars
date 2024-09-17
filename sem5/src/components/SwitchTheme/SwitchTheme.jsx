import { Button } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../../contextes/ThemeContext/ThemeContext"

export const SwitchTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return <>
        <span>{theme}</span>
        <Button variant="outlined" onClick={() => {
            toggleTheme()
        }}>ChangeTheme</Button>
    </>
}