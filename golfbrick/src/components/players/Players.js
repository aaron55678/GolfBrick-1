import React from 'react';
import './Players.css';
import Player from './Player';
import { Button } from '@mui/material';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

const Players = (props) => {
    
    
    return (
        <div className='players-section'>
            {props.playerArray.map(() => {})}
            <Button className='search-button' size='large' variant="outlined" endIcon={<GolfCourseIcon />}>Search</Button>
        </div>
    );
}

export default Players;