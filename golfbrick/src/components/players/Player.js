import React, { useState } from 'react';
import './Player.css';
import { TextField, Fab, } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';



const Player = (props) => {
    const [removedPlayer, setRemovedPlayer] = useState('');

    const removePlayerHandler = () => {
        setRemovedPlayer(() => {
            return props.player.id;
        });
        props.onRemovedPlayerId(removedPlayer);
        console.log(removedPlayer); //removedPlayer does not change straight away
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
                