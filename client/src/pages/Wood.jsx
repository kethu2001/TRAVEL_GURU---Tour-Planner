import React, { useEffect } from 'react';
import carving from '../images/carving.png';

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
                            keyword: 'wood carving'
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
            <img src={carving} alt="carving" className="max-w-full" style={{ width: '75%', height: '500px' }} />

            <h6 style={{ fontSize: '24px' }}><strong>Wood Carvings in Sri Lanka</strong></h6>

            <p className="my-4" style={{ fontSize: '18px' }}>Wood Carving in Sri Lanka is indeed superior to craftsmanship beyond words. Moreover, it is a craft on this island that holds a proud legacy. As per Sri Lankan history, a group of craftsmen belonging to sixty casts arrived in Sri Lanka. That was during the era in which Buddhism was established on this land. So, there is a belief that Sri Lanka embraced the art of woodworking from the craftsmen in that group.&nbsp;</p>

            <p className="my-4" style={{ fontSize: '18px' }}>The grandeur of the Sri Lankan traditional wood carvings can be still observed in many of the <a href="https://nexttravelsrilanka.com/cultural-and-religious-attractions-in-sri-lanka/"><em>cultural attractions</em></a> on this island. ‘<em>Embekke Devalaya</em>’, ‘<em>Lankathilaka Viharaya</em>’, and the ‘<em>Temple of Tooth Relic</em>’ are some of the ideal places for you to witness their splendor. They perfectly manifest how the wood carving traditions in Sri Lanka inextricably link to the wonderful culture of this land.&nbsp;</p>

            <p className="my-4" style={{ fontSize: '18px' }}>As of now, the wood carving industry in Sri Lanka shines bright as the traditions continue. The talented Sri Lankan craftsmen still do their best in offering the world wood carvings that are simply stupendous in their charm. And the specialty is, the traditional craftsmen still use the basic tools that they are familiar with. However, with their skillful hands,&nbsp; lifeless dull wooden pieces turn into adorning ornaments that allure millions.&nbsp;</p>

            <p className="my-4" style={{ fontSize: '18px' }}>Wooden wall hangings, animal and human figures, and flower pots are the most popular wood carving creations as of now. Of course, Sri Lankan traditional craftsmen are just clever at their work and talented beyond doubt. So, why not? Make a wood carving from Sri Lanka an authentic souvenir and experience its mind-blowing enchantments yourself.&nbsp;&nbsp;</p>
            <div id="map" style={{ width: '100%', height: '300px', marginBottom: '20px' }}></div>
        </div>
        
    );
}