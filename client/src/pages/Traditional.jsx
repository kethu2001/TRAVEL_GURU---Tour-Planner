import React from "react";
import fisherman from '../images/fisherman.png'
import mask2 from '../images/mask2.png';
import pottery from '../images/pottery.png';
import handloom from '../images/handloom.png';
import wood from '../images/wood.png';
import { Link } from 'react-router-dom';

export default function Traditional() {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <div className="bg-green-500 bg-opacity-70 rounded-lg w-3/7 px-8 py-5  shadow-lg border border-black absolute mt-4 left-20">
                    <p className="text-white text-center text-4xl font-bold font-istok">Traditional Industries</p>
                </div>
                <img src={fisherman} alt="fisherman" className="max-w-full " style={{ width: '100%', height: '500px' }} />
            </div>
            <div className="relative w-3/4 mx-auto mt-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0 left-0 right-0 text-center text-black font-bold font-istok text-2xl p-4">Pottery Industry</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg">
                    <div className="flex items-start">
                        <img src={pottery} alt="pottery" className="max-w-200 h-auto mt-8 ml-8 rounded-full mb-5 " style={{ width: '320px', height: '250px' }} />
                        <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                            <p className="text-black text-lg mb-8 font-istok">
                            "The pottery industry in Sri Lanka boasts a rich heritage, deeply intertwined with the island's culture and history. Artisans skillfully mold clay into exquisite vessels, reflecting intricate designs and traditional motifs, preserving centuries-old techniques cherished by local communities."                            </p>
                            <Link to ="/Pottery">
                            <button className="absolute bottom-7 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-istok font-bold">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-3/4 mx-auto mt-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0 left-0 right-0 text-center text-black font-bold font-istok text-2xl p-4">Sri Lankan masks</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg">
                    <div className="flex items-start">
                        <img src={mask2} alt="mask2" className="max-w-200 h-auto mt-8 ml-8 rounded-full mb-5" style={{ width: '1200px', height: '250px' }} />
                        <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                            <p className="text-black text-lg mb-8 font-istok">
                                "Sri Lankan masks,cultural significance, are vibrant expressions of tradition and folklore. Crafted with meticulous detail, these symbolize various deities, demons, and characters from mythology, embodying rituals, storytelling, and spiritual beliefs deeply rooted in Sri Lankan culture."
                            </p>
                            <Link to ="/Mask">
                            <button className="absolute bottom-7 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-istok font-bold">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-3/4 mx-auto mt-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0  left-0 right-0 text-center text-black font-bold font-istok text-2xl p-4">Wood Carving</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg">
                    <div className="flex items-start">
                        <img src={wood} alt="wood" className="max-w-200 h-auto mt-8 ml-8 rounded-full mb-5" style={{ width: '320px', height: '250px' }} />
                        <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                            <p className="text-black text-lg mb-8 font-istok">
                                "Sri Lanka's wood carving tradition is a testament to the island's artistic prowess. Skilled artisans intricately carve tales of folklore, religious motifs, and nature's splendor into native woods, preserving heritage while crafting timeless masterpieces that adorn homes, temples, and galleries worldwide."
                            </p>
                            <Link to ="/Wood">
                            <button className="absolute bottom-8 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-istok font-bold">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-3/4 mx-auto mt-20 mb-20 shadow-md" style={{ maxWidth: '1040px' }}>
                <div className="absolute top-0 left-0 right-0 text-center text-black font-bold font-istok text-2xl p-4">Handloom</div>
                <div className="bg-green-600 bg-opacity-20 rounded-lg">
                    <div className="flex items-start">
                        <img src={handloom} alt="handloom" className="max-w-200 h-auto mt-8 ml-8 rounded-full mb-5" style={{ width: '1200px', height: '250px' }} />
                        <div className="flex flex-col items-start ml-8 mr-8 mt-16">
                            <p className="text-black text-lg mb-8 font-istok">
                                "Sri Lankan handloom weaving is a cherished craft, passed down through generations. Artisans skillfully intertwine threads of vibrant hues, creating intricate patterns and textures that reflect the island's cultural heritage. Each handwoven creation tells a story, celebrating the artistry and tradition of Sri Lanka."
                            </p>
                            <Link to ="/Handloom">
                            <button className="absolute bottom-8 right-8 bg-lime-400 shadow-lg text-black py-4 px-8 rounded font-istok font-bold">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}