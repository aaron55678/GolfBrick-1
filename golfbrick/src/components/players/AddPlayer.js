import React from 'react';
import './AddPlayer.css';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddPlayer = () => {
    
    return (
        <div className='addplayer-section'>
            <Fab size='small' color='primary' aria-label='add'>
                <AddIcon />
            </Fab>
            <h3>Add Player</h3>
        </div>
    );
}

export default AddPlayer;
            
            