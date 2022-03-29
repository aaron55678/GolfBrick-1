import React from 'react';
import './Map.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker,} from 'react-google-maps';

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
    
    const findCenter = () => {
        let latTot = 0;
        let lngTot = 0;
        playerPositions.forEach((ply)=>{
            latTot = latTot + ply.coords[0];
            lngTot = lngTot + ply.coords[1];
        })
        return [(latTot/playerPositions.length), (lngTot/playerPositions.length)];
    }
    
    let centerCoords = findCenter();
    console.log(centerCoords[0]); 
    
    return (
        <div className='map-section'>
            <GoogleMap 
                defaultZoom={12}
                defaultCenter={{lat: 51.5, lng:0}}
            >
                {playerPositions.map((ply) => (
                    <div>
                        <Marker 
                            key={Math.random().toString()}
                            position={{
                                lat:ply.coords[0], 
                                lng:ply.coords[1]
                            }}
                            label={ply.playerName}
                        />
                    </div>
                ))}
                <Marker 
                    key={Math.random().toString()}
                    position={{
                        lat: centerCoords[0], 
                        lng: centerCoords[1]
                    }}
                    label={'center'}
                />
            </GoogleMap>
      </div>  
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;    