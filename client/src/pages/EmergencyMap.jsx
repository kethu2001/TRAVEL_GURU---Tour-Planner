import React, { useEffect } from 'react';

export default function () {
    useEffect(() => {
        // Load Google Maps API asynchronously
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCnQzEnKMlWf4U7ZUHvIoBWXKyQCyNkbD8&libraries=places`;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = initializeMap;
        };

        // Initialize the map and show emergency locations near user's geolocation
        const initializeMap = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        const map = new window.google.maps.Map(document.getElementById('map'), {
                            center: userLocation,
                            zoom: 12
                        });
                        const service = new window.google.maps.places.PlacesService(map);
                        service.nearbySearch({
                            location: userLocation,
                            radius: 5000, // Search within 5km radius
                            type: ['hospital', 'police']
                        }, (results, status) => {
                            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                                for (let i = 0; i < results.length; i++) {
                                    createMarker(results[i]);
                                }
                            }
                        });
                    },
                    () => {
                        console.error('Error: The Geolocation service failed.');
                    }
                );
            } else {
                console.error('Error: Your browser doesn\'t support geolocation.');
            }
        };

        // Create markers for emergency locations
        const createMarker = (place) => {
            new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name
            });
        };

        // Load Google Maps API and initialize map
        loadMapScript();
    }, []);
  
  return (
    <div id="map" style={{ width: '100%', height: '300px', marginBottom: '20px' }}></div>
  );
}
