import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PostAdd from '@mui/icons-material/PostAdd';

import { UserContext } from '../providers/user-provider';


export default function NavigationBar() {
    const {user, signIn, signOut} = useContext(UserContext);
    const navigate = useNavigate();

    const onSignOut = () => {
        signOut();
        navigate('/');
    };

    return <AppBar position="static">
        <Toolbar>
            <PostAdd />
            <Box sx={{ flexGrow: 0}}>
                <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                <Button color="inherit"  onClick={() => navigate('posts')}>Posts</Button>
            {user.name
                        ? <>
                            <Button color="inherit" onClick={() => navigate('admin')}>Admin</Button>
                            <Button color="inherit" variant="outlined" onClick={onSignOut}>Sign Out</Button>
                        </>
                        : <Button color="inherit" variant="outlined" onClick={signIn}>Sign In</Button>}
            </Box>
        </Toolbar>
    </AppBar>
}
