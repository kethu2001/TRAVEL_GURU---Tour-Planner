import React, { useEffect } from 'react';
import handloomp from '../images/handloomp.png';

export default function Handloom() {
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
                            keyword: 'Handloom'
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
        <div className="flex flex-col items-center justify-center">
            <img src={handloomp} alt="handloomp" className="max-w-full" style={{ width: '75%', height: '500px' }} />

            <h6 style={{ fontSize: '24px' }}><strong>Handloom Industry in Sri Lanka</strong></h6>

            <p className="my-4">In brief, handloom is a hand-woven cotton textile industry. Simply, the handloom industry has a noteworthy past entangled around the legendary history of Sri Lanka. You might sometimes know that there is a belief that the Sri Lankan civilization started with the arrival of Prince Vijaya and his group of 700 followers. And the interesting fact is, when they stepped onto this island, the first human being they met was Kuweni, who was weaving. So, this simply means that weaving was not a new thing for Sri Lankans. Moreover, what had taken the handloom industry this far might be the genes with talents that were passed from generation to generation.&nbsp;</p>

            <p className="my-4">However, thanks to the individuals who are interested in handlooms, the industry is still alive. Further, the handloom industry is portrayed as a trending market among both Sri Lankans and foreigners. On this island, village ladies play a major role in sustaining this industry. Of course, there are a few leading manufacturers with regard. Sill, it mainly remains as a cottage industry that flourishes the beauty of the traditional weaving patterns. Sri Lankan handlooms offer an amusing mix of cotton and silk threads. </p>

            <p className="my-4">Sarees, shawls, and sarongs happen to be the most popular products within the market today. Apart from that, the Sri Lankan handloom industry also gifts the market colorful high-quality household linen, and also curtain fabrics. And the important factor is, among all the other arts and crafts in Sri Lanka, the handloom industry is still alive and is still prospering. Hence, this certainly is an industry that demands high attention and appreciation.&nbsp;&nbsp;&nbsp;</p>
            <div id="map" style={{ width: '100%', height: '300px', marginBottom: '20px' }}></div>
        </div>
    );
}
