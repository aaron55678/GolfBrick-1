import React, { useState } from 'react';
import './AddPlayer.css';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddPlayer = (props) => {
    
    const [addPlayer, setAddPlayer] = useState({});

    const addPlayerHandler = () =>{
        setAddPlayer({
            id: Math.random().toString(),
        });
        props.onUpdatedStatus(addPlayer);
        console.log(addPlayer);
    };
    
    return (
        <div className='addplayer-section'>
            <Fab size='small' color='primary' aria-label='add' onClick={addPlayerHandler}>
                <AddIcon  />
            </Fab>
            <h3>Add Player</h3>
        </div>
    );
};

export default AddPlayer;

            
            