import React, { useState } from 'react';
import './Player.css';
import { TextField, Fab, } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';



const Player = (props) => {
    const [deletePlayer, setDeletePlayer] = useState(props.addedPlayers);

    const deleteHandler = () => {
        setDeletePlayer(props.addedPlayers.filter((el) => {
            console.log(el.id)
            return el !== el.id;
        }))
        props.onDeletedPlayer(deletePlayer);
    };

    return (
        <div className='player-section'>
            <div>
            <TextField id="outlined-name" label="Player Name" />
            </div>
            <div className='postcode'>
                <TextField id="outlined-basic" label="Postcode" variant="outlined" />
            </div>
            <Fab style={{backgroundColor: '#FF1A1E'}} size='small' aria-label="remove" >
                <RemoveIcon style={{color: 'white'}} onClick={deleteHandler}/>
            </Fab>
        </div>
    );
}

export default Player;
                