import React from "react";

import PlaceDetails from '../components/PlaceDetails';

const List = ({places}) => {

    return (
        <div className="list overflow-auto grid grid-cols-12 gap-9 ">
            {places?.map((place, i) => (
                <div key={i} className="col-span-12">
                    <PlaceDetails place={place} />
                </div>
            ))}
        </div>
    );
}
export default List;