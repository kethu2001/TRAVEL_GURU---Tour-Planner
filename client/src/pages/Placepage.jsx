import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import CommentSection from '../components/CommentSection';
//import Header from '../components/Header'

export default function Placepage() {
  SwiperCore.use([Navigation]);
  const { placeSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/place/getplaces?slug=${placeSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPlace(data.places[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPlace();
  }, [placeSlug]);

  if (loading)
    return (
 <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );

    return <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
    <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>{place && place.name}</h1>
    {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
    {error && (
      <p className='text-center my-7 text-2xl'>Something went wrong!</p>
    )}
    {place && !loading && !error && (
        <div>
    <Swiper navigation>
            {place.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div className='h-[550px]' style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'cover', }} ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          )}
    <Link to={`/search?tourtype=${place && place.tourtype}`} className='self-center mt-5'>
    <Button color='gray' pill size='xs'>{place && place.tourtype}</Button>
    </Link>
    <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{place && new Date(place.createdAt).toLocaleDateString()}</span>
        <span className='italic'>{place && (place.description.length /1000).toFixed(0)} mins read</span>
    </div>
    <div className='p-3 max-w-2xl mx-auto w-full post-content' dangerouslySetInnerHTML={{__html: place && place.description}}>

    </div>
    <CommentSection placeId={place._id} />
  </main >;

}
