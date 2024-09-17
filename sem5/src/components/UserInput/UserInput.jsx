import { TextField, Button } from '@mui/material'
import { useContext, useState } from 'react'
import { UserContext } from '../../contextes/UserContext/UserContext'

export const UserInput = () => {
    const { userName, setUserName } = useContext(UserContext)
    const [tmpUserName, setTmpUserName] = useState('')
    return <>
        <h3>Hello {userName}</h3>
        <TextField id="outlined-basic" label="Name"
            variant="outlined"
            onChange={(e) => setTmpUserName(e.target.value)} />
        <br />
        <Button variant="outlined" onClick={() => {
            setUserName(tmpUserName)
        }}>ChangeName</Button>
    </>
}