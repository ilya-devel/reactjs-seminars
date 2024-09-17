import { Switch } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/ThemeReduce'

export const ToggleTheme = () => {
    const dispatch = useDispatch()
    return <>
        <p>Toggle Theme</p>
        <Switch onChange={() => {
            dispatch(toggleTheme())}} />
    </>
}

export default ToggleTheme