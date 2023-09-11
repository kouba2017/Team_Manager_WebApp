import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const nav=useNavigate()
    const LogOut=()=>{
        localStorage.removeItem('userToken')
        nav('/')
    }
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<LogoutIcon />} onClick={LogOut}>Logout</Button>
            </Stack>
        </div>
    )
}

export default Logout