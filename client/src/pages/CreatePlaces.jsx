import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, FileInput, Select, TextInput } from 'flowbite-react';

export default function CreatePlaces() {

    return (
        <main className='p-8 mx-auto bg-slate-50'>
            <div className='flex justify-center  '>
                {/* <div className='p-10 flex flex-col gap-3 '>
                    <button className='w-32 mx-1 p-3 bg-blue-700 text-white rounded-lg hover:opacity-95 disabled:opacity-80 mt-3 shadow-xl'>users</button>
                    <button className='w-32 mx-1 p-3 bg-yellow-400 text-white rounded-lg hover:opacity-95 disabled:opacity-80 mt-3 shadow-xl'>Tour Places</button>
                    <button className='w-32 mx-1 p-3 bg-blue-700 text-white rounded-lg hover:opacity-95 disabled:opacity-80 mt-3 shadow-xl'>Reports</button>
                    <button className='w-32 mx-1 p-3 bg-blue-700 text-white rounded-lg hover:opacity-95 disabled:opacity-80 mt-3 shadow-xl'>Social Blogs</button>

                </div> */}
                <div className='border-2 p-8 rounded-lg border-yellow-300 bg-red-100 shadow-xl mt-12 w-screen'>
                    <div className='border-2 p-7 rounded-lg border-yellow-300 bg-slate-300 shadow-xl w-9/12 mx-10 '>
                        <h1 className='text-3xl font-semibold text-center my-7'>Edit Your Place</h1>

                        <form className='flex flex-col sm:flex-row gap-4'>



                            <div className='flex flex-col gap-4 flex-1'>
                                <input type='text' placeholder='Name of the place' className='border-2 p-3 rounded-lg border-yellow-300' id='name' maxLength='62' minLength='10' />
                                <textarea type='text' placeholder='Description' className='border-2 p-3 rounded-lg border-yellow-300' id='description' />
                                <input type='text' placeholder='Address' className='border-2 p-3 rounded-lg border-yellow-300' id='address' />
                                <input type='text' placeholder='Province' className='border-2 p-3 rounded-lg border-yellow-300' id='province' />
                                <Select className='border-2 p-3 rounded-lg border-yellow-300' id='tourtype'>
                                    <option value='uncategorized'>Select a Type</option>
                                    <option value='Temple'>Temple</option>
                                    <option value='hplace'>Historical Place</option>
                                    <option value='Jungle'>Jungle</option>
                                    <option value='Waterfall'>Waterfall</option>
                                    <option value='Mountain'>Mountain</option>
                                </Select>
                                <button className='p-3 bg-blue-700 text-white rounded-lg hover:opacity-95 disabled:opacity-80'>Add Tour Place</button>


                            </div>


                            {/* <div className='flex flex-col flex-1 gap-4 border-2 border-yellow-300 p-3 rounded-lg bg-slate-100' style={{ height: '120px' }}>
                                <p className='font-semibold'> Images:
                                    <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
                                </p>
                                <div className='flex gap-2'>
                                    <input  className='p-2 border border-yellow-300 rounded w-full' type='file' id='images' accept='image/*' multiple />
                                    <button  type='button' className='p-2 text-white border border-green-700 rounded  hover:shadow-lg disabled:opacity-80 bg-blue-700 text-s h-10'>Upload</button>
                                </div>
                                <p className='text-red-700 text-sm'>{imageUploadError && imageUploadError}</p>
                                {formData.imageUrls.length > 0 && formData.imageUrls.map((url, index) => (
                                    <div key={url} className='flex justify-between p-3 border items-center'>
                                        <img src={url} alt='listing image' className='w-24 h-24 object-contain rounded-lg' />
                                        <button type='button' onClick={() => handleRemoveImage(index)} className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'>Delete</button>
                                    </div>
                                ))}
                                {error && <p className='text-red-700 text-sm'>{error}</p>}
                            </div> */}
                            <div className="flex flex-col flex-1 gap-4 border-2 border-yellow-300 p-3 rounded-lg bg-slate-100" style={{ height: '160px' }}>
                                <p className='font-semibold'>Images:
                                    <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
                                </p>
                                <div className="flex gap-4">
                                    <input className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple />
                                    <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                                </div>

                            </div>



                        </form>


                    </div>
                </div>
            </div>
        </main>
    )
}
