// import React from 'react'

// export default function Places() {
//   return (
//     <div>Places</div>
//   )
// }
import React, { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import { Button } from 'flowbite-react';

export default function Places() {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate()
    const [files, setFiles] = useState([])
    const [formData, setFormData] = useState({
        imageUrls: [],
        name: '',
        description: '',
        address: '',
        type: 'rent',
        bedrooms: 1,
        bathrooms: 1,
        regularPrice: 50,
        discountPrice: 0,
        offer: false,
        parking: false,
        furnished: false,
    });
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    console.log(formData)

    const handleImageSubmit = (e) => {
        if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
            setUploading(true);
            setImageUploadError(false);
            const promises = []; //we going to upload more than one image

            for (let i = 0; i < files.length; i++) {
                promises.push(storeImage(files[i]));
            }
            Promise.all(promises) //because we need to wait all the images
                .then((urls) => {
                    setFormData({ ...formData, imageUrls: formData.imageUrls.concat(urls), });
                    setImageUploadError(false);
                    setUploading(false);
                })
                .catch((err) => {
                    setImageUploadError('Image upload failed (2 mb max per image)');
                    setUploading(false);
                });
        } else {
            setImageUploadError('You can only upload 6 images per listing');
            setUploading(false);
        }
    };

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => { reject(error); },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };

    const handleRemoveImage = (index) => {
        setFormData({ ...formData, imageUrls: formData.imageUrls.filter((_, i) => i !== index), });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.imageUrls.length < 1)
                return setError('You must upload at least one image');
            if (+formData.regularPrice < +formData.discountPrice)       // CONVERT THE STRING TO NUMBER ADDING '+'
                return setError('Discount price must be lower than regular price');
            setLoading(true);
            setError(false);
            const res = await fetch('/api/listing/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ ...formData, userRef: currentUser._id, }),
            });
            const data = await res.json();
            setLoading(false);
            if (data.success === false) {
                setError(data.message);
            }
            navigate(`/listing/${data._id}`);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            type: event.target.value,
            type: event.target.options[event.target.selectedIndex].innerText,
        });
    };




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
                    <Button color="blue">
        <HiPlus className="mr-2 h-5 w-5" />
        Add Place
      </Button>
                        <h1 className='text-3xl font-semibold text-center my-7'>Edit Your Place</h1>

                        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>



                            <div className='flex flex-col gap-4 flex-1'>
                                <input type='text' placeholder='Name of the place' className='border-2 p-3 rounded-lg border-yellow-300' id='name' maxLength='62' minLength='10' required onChange={handleChange} value={formData.name} />
                                <textarea type='text' placeholder='Description' className='border-2 p-3 rounded-lg border-yellow-300' id='description' required onChange={handleChange} value={formData.description} />
                                <input type='text' placeholder='Address' className='border-2 p-3 rounded-lg border-yellow-300' id='address' required onChange={handleChange} value={formData.address} />
                                <input type='text' placeholder='City' className='border-2 p-3 rounded-lg border-yellow-300' id='address' required onChange={handleChange} value={formData.address} />
                                <label htmlFor="" className="block  ">
                                    <select
                                        className='border-2 p-3 rounded-lg border-yellow-300'
                                        id=''
                                        required
                                        value={formData.type}
                                        onChange={handleChange}
                                    >
                                        <option value=''>Types</option>
                                        <option value='Temple'>Temple</option>
                                        <option value='Hotel'>Hotel</option>
                                        <option value='Restaurants'>Restaurants</option>
                                    </select>

                                </label>
                                <button disabled={loading || uploading} className='p-3 bg-blue-700 text-white rounded-lg hover:opacity-95 disabled:opacity-80'>{loading ? 'Creating' : 'Add Tour place'}</button>


                            </div>


                            <div className='flex flex-col flex-1 gap-4 border-2 border-yellow-300 p-3 rounded-lg bg-slate-100' style={{ height: '120px' }}>
                                <p className='font-semibold'> Images:
                                    <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
                                </p>
                                <div className='flex gap-2'>
                                    <input onChange={(e) => setFiles(e.target.files)} className='p-2 border border-yellow-300 rounded w-full' type='file' id='images' accept='image/*' multiple />
                                    <button disabled={uploading} onClick={handleImageSubmit} type='button' className='p-2 text-white border border-green-700 rounded  hover:shadow-lg disabled:opacity-80 bg-blue-700 text-s h-10'>{uploading ? 'Uploading...' : 'Upload'}</button>
                                </div>
                                <p className='text-red-700 text-sm'>{imageUploadError && imageUploadError}</p>
                                {formData.imageUrls.length > 0 && formData.imageUrls.map((url, index) => (
                                    <div key={url} className='flex justify-between p-3 border items-center'>
                                        <img src={url} alt='listing image' className='w-24 h-24 object-contain rounded-lg' />
                                        <button type='button' onClick={() => handleRemoveImage(index)} className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'>Delete</button>
                                    </div>
                                ))}
                                {error && <p className='text-red-700 text-sm'>{error}</p>}
                            </div>



                        </form>


                    </div>
                </div>
            </div>
        </main>
    )
}
