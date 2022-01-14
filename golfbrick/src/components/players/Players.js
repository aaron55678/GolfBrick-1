import React from 'react';
import './Players.css';
import './Player.css';
import Player from './Player';
import { Button } from '@mui/material';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

const Players = (props) => {
    
    const removedPlayerIdHandler = (removedId) => {
        console.log(removedId);
        props.players.filter((player) => {
            console.log(player.id);

            return player.id !== removedId;
        });
    };//need to rerender the map function below
    
    return (
        <div className='players-section'>
            <ul>
                {props.players.map((player) => {
                    return <li key={player.id}><Player player={player} onRemovedPlayerId={removedPlayerIdHandler}></Player></li>;
                })}
            </ul>
            <Button className='search-button' size='large' variant="outlined" endIcon={<GolfCourseIcon />}>Search</Button>
        </div>
    );
}

export default Players;