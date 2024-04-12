import React from 'react'
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { set } from 'mongoose';
import { Button } from "flowbite-react";
import { FaHeart } from "react-icons/fa";

export default function PlaceCard({ place }) {
  return (
    <div className='bg-zinc-300 border-spacing-0 shadow-md hover:shadow-xl transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/place/${place.slug}`}>
        <img
          src={
            place.imageUrls[0] ||
            'https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?t=st=1712919594~exp=1712923194~hmac=80f3efe33a3955ae2bea0bd043538b746ce97441bb7ee5d5ffa0e9571d16310f&w=740'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <br />
        <div className='flex justify-between'>
  <div className='flex flex-row items-center gap-1'>
    <MdLocationOn className='h-6 w-6 text-green-700' />
    <p className='text-sm text-gray-600 truncate w-full'>
      {place.province}
    </p>
  </div>
  <div className='flex flex-row items-center gap-1'>
    <FaHeart className='h-6 w-6 text-yellow-400' />
    <p className='text-sm text-gray-600 truncate w-full'>
      30
    </p>
  </div>
</div>
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700 flex justify-center'>
            {place.name}
          </p>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {place.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Button className='shadow-sm' color="warning" pill>See More</Button>
          </div>


        </div>
      </Link>
    </div>
  )
}
