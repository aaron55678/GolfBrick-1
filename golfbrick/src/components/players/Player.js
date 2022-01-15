import React, { useState } from 'react';
import './Player.css';
import { TextField, Fab, } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';



const Player = (props) => {
    const [removedPlayer, setRemovedPlayer] = useState(props.player.id); //setting this original state alleviates the need to double click to remove player

    const removePlayerHandler = () => {
        props.onRemovedPlayerId(removedPlayer);//passing up state to remove player
    };
    return (
        <div className='player-section'>
            <div>
            <TextField id="outlined-name" label="Player Name" />
            </div>
            <div className='postcode'>
                <TextField id="outlined-basic" label="Postcode" variant="outlined" />
            </div>
            <Fab style={{backgroundColor: '#FF1A1E'}} size='small' aria-label="remove" onClick={removePlayerHandler}>
                <RemoveIcon style={{color: 'white'}} />
            </Fab>
        </div>
    );
}

export default Player;
                