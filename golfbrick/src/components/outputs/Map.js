import React from 'react';
import './Map.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

//variables for map
  
  
const Map = () => {
    
    return (
        <div className='map-section'>
            <GoogleMap 
                defaultZoom={10}
                defaultCenter={{lat: 12, lng:12}}
            />
      </div>  
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;