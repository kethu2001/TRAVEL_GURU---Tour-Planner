// import React from 'react'
// import { Link } from 'react-router-dom';
// import { MdLocationOn } from 'react-icons/md';
// import { set } from 'mongoose';

// export default function PlaceCard({ place }) {
//   return (
//     <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
//       <Link to={`/place/${place.slug}`}>
//         <img
//           src={
//             place.imageUrls[0] ||
//             'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
//           }
//           alt='listing cover'
//           className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
//         />
//         <div className='p-3 flex flex-col gap-2 w-full'>
//           <p className='truncate text-lg font-semibold text-slate-700'>
//             {place.name}
//           </p>
//           <div className='flex items-center gap-1'>
//             <MdLocationOn className='h-4 w-4 text-green-700' />
//             <p className='text-sm text-gray-600 truncate w-full'>
//               {place.province}
//             </p>
//           </div>
//           <p className='text-sm text-gray-600 line-clamp-2'>
//             {place.description}
//           </p>
          
          
//         </div>
//       </Link>
//     </div>
//   )
// }
