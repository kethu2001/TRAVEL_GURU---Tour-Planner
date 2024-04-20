import { useEffect, useState } from 'react';
import PlaceCard from '../components/PlaceCard'
import { useParams } from 'react-router-dom';

export default function Tour() {
//     const { placeSlug } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [place, setPlace] = useState(null);
    const [recentPlaces, setRecentPlaces] = useState(null);

    // useEffect(() => {
    //     const fetchPlace = async () => {
    //       try {
    //         setLoading(true);
    //         const res = await fetch(`/api/place/getplaces?slug=${placeSlug}`);
    //         const data = await res.json();
    //         if (!res.ok) {
    //           setError(true);
    //           setLoading(false);
    //           return;
    //         }
    //         if (res.ok) {
    //           setPlace(data.places[0]);
    //           setLoading(false);
    //           setError(false);
    //         }
    //       } catch (error) {
    //         setError(true);
    //         setLoading(false);
    //       }
    //     };
    //     fetchPlace();
    //   }, [placeSlug]);

    useEffect(() => {
        try {
          const fetchRecentPlaces = async () => {
            const res = await fetch(`/api/place/getplaces?limit=8`);
            const data = await res.json();
            if (res.ok) {
              setRecentPlaces(data.places);
            }
          };
          fetchRecentPlaces();
        } catch (error) {
          console.log(error.message);
        }
      }, []);
  return (
    <div>
        <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-8 mt-5 justify-center'>
          {recentPlaces &&
            recentPlaces.map((place) => <PlaceCard key={place._id} place={place} />)}
        </div>
      </div>
      <br />
    </div>
  )
}
