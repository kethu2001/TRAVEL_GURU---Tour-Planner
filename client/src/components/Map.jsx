import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({setCoordinates, setBounds,coordinates}) => {

    

    return (
        <div className="h-[100vh] w-full">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCnQzEnKMlWf4U7ZUHvIoBWXKyQCyNkbD8' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                onChange={(e)=>{
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
            >
            </GoogleMapReact>
        </div>
    );
}
export default Map;