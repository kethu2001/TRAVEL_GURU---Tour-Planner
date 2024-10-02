import React from 'react';

const PlaceDetails = ({ place }) => {

    return (

        <div className="shadow-lg">
            <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${place.photo ? place.photo.images.large.url : 'https://www.srilankalocaltours.com/wp-content/uploads/when-is-the-best-time-to-visit-sri-lanka.jpg'})` }}></div>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{place.name}</h2>
            </div>
            <div className="flex justify-between my-2">
                <div className="readonly-rating">{Number(place.rating)}</div>
                <p className="text-sm text-gray-500">out of {place.num_reviews} reviews</p>
            </div>
            <div className="flex justify-between">
                <p className="text-base">Price</p>
                <p className="text-sm text-gray-500">{place.price_level}</p>
            </div>
            {place.address && (
                <p className="text-sm text-gray-500 my-2">
                    {place.address}
                </p>
            )}
            {place.phone && (
                <p className="text-sm text-gray-500 my-2">
                    {place.phone}
                </p>
            )}
            <div className="flex justify-between p-4 border-t border-gray-200">
                <button className="text-green-500" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </button>
                <button className="text-blue-500" onClick={() => window.open(place.website, '_blank')}>
                    Website
                </button>
            </div>
        </div>

    );
}
export default PlaceDetails; 