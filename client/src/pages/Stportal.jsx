import React from 'react';
import srilanka from '../images/srilanka.png';
import mask from '../images/mask.png';
import food from '../images/food.png';
import attraction from '../images/attraction.png';
import emergency from '../images/emergency.png';
import { Link } from 'react-router-dom';


export default function Stportal() {
    return (
        <div>
            <div class="flex justify-center items-start pt-20">
                <div class="bg-green-600 bg-opacity-80 rounded-lg w-3/4 px-8 py-8 shadow-lg border border-black">
                    <p class="text-white text-center text-3xl font-bold font-istok">Sustainable Traditional Portal</p>
                </div>
            </div>
            <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'auto', margin: '20px auto 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontFamily: 'Istok Web' }}>
                    <p style={{ color: '#000000', fontSize: '1.5rem', margin: '0 0 20px', textAlign: 'left' }}>
                        "Sustainable Traditional Portal is your gateway to immersive cultural experiences rooted in eco-conscious practices. Explore our curated selection of traditional destinations, offering authentic encounters with local communities while prioritizing environmental sustainability. Embark on a journey that respects both heritage and the planet, ensuring your travels leave a positive impact for generations to come."
                    </p>
                </div>
                <img src={srilanka} alt="srilanka" style={{ maxWidth: '450px', height: 'auto', marginRight: '30px' }} />
            </div>
            <div className="relative w-3/4 mx-auto mt-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0 left-0 text-black font-bold font-istok text-2xl p-4">Attractions</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg flex">
                    <img src={attraction} alt="attraction" className="max-w-200 h-auto ml-8 mt-20 mb-7" style={{ width: '250px', height: '220px' }} />
                    <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                        < p className="text-black text-lg mb-8 font-istok">
                        "Welcome to Attraction, where sustainability and adventure intersect within the stunning embrace of nature's wonders. Embark on a journey to our thoughtfully curated destinations, each boasting an array of captivating attractions that celebrate the richness of the environment. Delve into thrilling outdoor activities, explore pristine landscapes, and engage with local cultures, all while making a positive impact on the planet."</p>
                        <Link to ="/Attraction">
                        <button className="absolute bottom-8 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-bold ">Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative w-3/4 mx-auto mt-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0 left-0 text-black font-bold font-istok text-2xl p-4">Restaurants</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg flex">
                    <img src={food} alt="food" className="max-w-200 h-auto ml-8 mt-20 mb-5" style={{ width: '250px', height: '250px' }} />
                    <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                        <p className="text-black text-lg mb-8 font-istok">
                            “Embark on a captivating culinary voyage through Sri Lankan restaurants, where every dish whispers tales of ancient traditions and culinary artistry. From fragrant curries to crispy hoppers, savor the flavors that have been lovingly preserved and shared across generations.” 🍛🌶️🥥
                        </p>
                        <Link to="/restaurant">
                        <button className="absolute bottom-8 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-bold ">Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative w-3/4 mx-auto mt-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0 left-0 text-black font-bold font-istok text-2xl p-4">Traditional Industries</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg">
                    <div className="flex items-start">
                        <img src={mask} alt="mask" className="max-w-200 h-auto mt-8 ml-8 mb-5" style={{ width: '200px', height: '250px' }} />
                        <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                            <p className="text-black text-lg mb-8 font-istok">
                                "Traditional Industries invites you to discover the rich tapestry of artisanal crafts and age-old practices that define the cultural essence of our destinations. Immerse yourself in the heritage of local communities as you witness firsthand the craftsmanship behind traditional trades such as pottery, weaving, and woodworking. Explore our curated selection of experiences that celebrate the legacy of these timeless industries, offering you a glimpse into the soul of each destination."
                            </p>
                            <Link to="/Traditional">
                            <button className="absolute bottom-8 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-bold ">
                                Explore
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-3/4 mx-auto mt-20 mb-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0 left-0 text-black font-bold font-istok text-2xl p-4">Emergency-Locations</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg flex">
                    <img src={emergency} alt="emergency" className="max-w-200 h-auto ml-8 mt-5" style={{ width: '250px', height: '300px' }} />
                    <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                        < p className="text-black text-lg mb-8 font-istok">
                            " Experience travel with a conscience through Eco-Transport, where sustainability meets seamless exploration. Embrace eco-friendly modes of transportation that minimize carbon footprint while maximizing your adventure. From electric bikes and hybrid vehicles to eco-conscious tour operators, our curated selection of transportation options ensures you can journey responsibly without compromising on convenience or comfort. Join us in shaping a greener future of travel, one ride at a time."
                        </p>
                        <button className="absolute bottom-8 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-bold ">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
