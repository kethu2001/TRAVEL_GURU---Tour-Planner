import React, { useState, useEffect } from 'react';
import { getPlacesData } from '../api/api';

import Header from '../components/MapHeader';
import List from '../components/List';
import Map from '../components/Map';



function Attractions() {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
          setCoordinates({lat: latitude, lng: longitude});
        });
      },[]);

      useEffect(() => {
        if(bounds.sw && bounds.ne){
    
          getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
              setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
            });
        }
      },[bounds]);

    return (
        <div>
            <Header setCoordinates={setCoordinates}/>
            <div className="flex h-screen">
                <div className="w-2/5 overflow-auto">
                    <List places={places}/>
                </div>
                <div className="w-3/5">
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </div>
            </div>
        </div>
    );
}

export default Attractions;
