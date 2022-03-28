import React from 'react';
import './Map.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

//dummy pplayer location data

  
const playerPositions = [
        {
            playerName: 'Dave',
            coords: [51.543, -0.11]
        },
        {
            playerName: 'Steve',
            coords: [51.482, -0.02]
        },
        {
            playerName: 'Dave2',
            coords: [51.501, 0.06]
        },
        {
            playerName: 'Steve2',
            coords: [51.463, -0.14]
        }];  
const Map = (props) => {
    
    console.log(playerPositions[0].coords[0])
    return (
        <div className='map-section'>
            <GoogleMap 
                defaultZoom={12}
                defaultCenter={{lat: 51.5, lng:0}}
            >
                {playerPositions.map(ply => (
                    <Marker 
                        key={Math.random().toString()}
                        position={{
                            lat:ply.coords[0], 
                            lng:ply.coords[1]
                        }}
                    />
                    
                ))}
            </GoogleMap>
      </div>  
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;    