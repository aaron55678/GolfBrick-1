import React from 'react';
import './OutputOptions.css';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

const OutputOptions = () => {
    
    return (
        <div className='output-options-section'>
            <ToggleButtonGroup
                color="primary"
                exclusive
            >
                <ToggleButton value="Map">Map</ToggleButton>
                <ToggleButton value="List">List</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default OutputOptions;
            