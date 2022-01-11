import React from 'react';
import './Players.css';
import './Player.css';
import Player from './Player';
import { Button } from '@mui/material';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

const Players = (props) => {
    
    const saveDeletedPlayerHandler = (deletedPlayer) => {
        props.onDeletedPlayerPass(deletedPlayer);
    }
    
    return (
        <div className='players-section'>
            {props.addedPlayers.map(() => <Player addedPlayers={props.addedPlayers} onDeletedPlayer={saveDeletedPlayerHandler}/> )}
            <Button className='search-button' size='large' variant="outlined" endIcon={<GolfCourseIcon />}>Search</Button>
        </div>
    );
}

export default Players;