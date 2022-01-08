import React from 'react';
import './Nav.css';

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    
    return (
        <div className='nav-section'>
             <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className='logo-name' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        GolfBrick
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Nav;
            