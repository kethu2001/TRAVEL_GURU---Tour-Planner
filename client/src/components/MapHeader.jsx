import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({setCoordinates}) => {

    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    }
    return (
        <div className="flex justify-center items-start">
            <div className="bg-blue-800   px-2 py-2 shadow-lg border-t border-black flex justify-between w-full">
                <p className="text-white text-2xl font-bold font-istok ml-auto mr-4">Explore more</p>
                <Autocomplete
                    onLoad={onLoad}
                    onPlaceChanged={onPlaceChanged}
                >
                    <input type="text" placeholder="Search..." className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" />
                </Autocomplete>
            </div>
        </div>
    );
}
export default Header;