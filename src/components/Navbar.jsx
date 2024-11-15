import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const Navbar = () => {

    const navigate = useNavigate();

    const handleSignout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            // Handl erorr
            console.log(error)
        }
    }

    return (
        <AppBar style={{ display: 'flex', alignItems: 'flex-end', gap:'4px'}}>
            <Toolbar>
                <Box display="flex" alignItems="flex-end">
                    <Button color='white' variant='outlined' onClick={() => navigate('/home')}>home</Button>
                    <Button color='success' variant='contained' onClick={() => navigate('/viewfavourites')}>Favorites</Button>
                    <Button color='#fc9403' variant='contained' onClick={() => navigate('/viewblogs')}>Blogs</Button>
                    <Button onClick={handleSignout} variant="outlined" style={{ color: 'white', border: '1px solid white' }}>Signout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar