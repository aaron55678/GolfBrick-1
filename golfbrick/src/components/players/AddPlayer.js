import React, { useState } from 'react';
import './AddPlayer.css';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddPlayer = (props) => {
    const [addedPlayerStatus, setAddedPlayerStatus] = useState(Math.random().toString());
    
    const playerStatusHandler = () => {
        setAddedPlayerStatus(Math.random().toString());
        props.onPlayerStatusChange(addedPlayerStatus);//passing up state to players array
    }
    
    return (
        <div className='addplayer-section'>
            <Fab size='small' color='primary' aria-label='add' onClick={playerStatusHandler}>
                <AddIcon  />
            </Fab>
            <h3>Add Player</h3>
        </div>
    );
};

export default AddPlayer;

            
            