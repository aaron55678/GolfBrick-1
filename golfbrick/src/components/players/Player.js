import React from 'react';
import './Player.css';
import { TextField } from '@mui/material';
const Player = () => {
    
    return (
        <div className='player-section'>
            <div>
            <TextField id="outlined-name" label="Player Name" />
            </div>
            <div className='postcode'>
                <TextField id="outlined-basic" label="Postcode" variant="outlined" />
            </div>
        </div>
    );
}

export default Player;
                