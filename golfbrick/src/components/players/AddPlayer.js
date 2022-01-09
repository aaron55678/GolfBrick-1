import React, { useState } from 'react';
import './AddPlayer.css';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddPlayer = (props) => {
    const [addPlayer, setAddPlayer] = useState(props.playerArray);

    const addPlayerHandler = () =>{
        setAddPlayer(props.playerArray.concat('New Player Added'));
        props.onUpdatedStatus(addPlayer);
        
    };
    
    return (
        <div className='addplayer-section'>
            <Fab size='small' color='primary' aria-label='add' onClick={addPlayerHandler}>
                <AddIcon  />
            </Fab>
            <h3>Add Player</h3>
        </div>
    );
}

export default AddPlayer;
            
            