import React, { useEffect } from 'react';
import Makemask from '../images/Makemask.png';

export default function Mask() {
    useEffect(() => {
        // Load Google Maps API asynchronously
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCnQzEnKMlWf4U7ZUHvIoBWXKyQCyNkbD8&libraries=places`;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = initializeMap;
        };

        // Initialize the map and show mask shops near user's geolocation
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
                            keyword: 'mask'
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

        // Create markers for mask shops
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
        <div>
            <img src={Makemask} alt="Makemask" className="max-w-full" style={{ width: '100%', height: '500px' }} />
            <h2 style={{ fontSize: '24px', marginTop: '20px', marginBottom: '20px' }}><strong>Traditional Mask Industry in Sri Lanka</strong></h2>

            <p style={{ fontSize: '18px', marginBottom: '20px' }}>In brief, Sri Lankan traditional masks exclusivity has the magic of making one gape in wonder. Their features make them interesting, and indeed, the character traditional masks are highly distinctive to Sri Lanka. All of them come in vibrant colors and shades. Besides, the following mask’s designs happen to be the most popular from Sri Lanka.&nbsp;</p>

            <ul style={{ fontSize: '18px', marginBottom: '20px' }}><li><strong>Raksha Masks</strong>: These are the masks for devil dances. Misshapen mouths and bulging eyes are a common feature of them.&nbsp;</li><li><strong>Sanni Masks</strong>: The Performers of the ‘Daha-Ata Sanniya’ use these masks. They feature the characters of the ‘Sanni evils’ who cause illnesses according to the myths.&nbsp;</li><li><strong>Kolam Masks</strong>: They mainly highlight human characters, yet with unique features and colors. Mainly used for ‘kolam’, and some of the ‘dance-dramas’.&nbsp;&nbsp;</li></ul>

            <p style={{ fontSize: '18px', marginBottom: '20px' }}>These are just a few. There are many more masks that bring out various aspects of life. Even though these masks were used for rituals related to purification, fertility, and fortune in the past, their use in today’s world is quite different. Sri Lankan Traditional Masks are today an ornament that adds beauty to the walls. In addition, they are a popular form of souvenirs as well. However, Ambalangoda and the southernmost areas of the island are more popular for this industry.&nbsp;</p>

            <div id="map" style={{ width: '100%', height: '300px', marginBottom: '20px' }}></div>
        </div>
    );
}
