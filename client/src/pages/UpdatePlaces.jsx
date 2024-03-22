import { useEffect, useState } from 'react';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { set } from 'mongoose';
import { useSelector } from 'react-redux';
import { useNavigate, useParams  } from 'react-router-dom';
import { Button, FileInput, Select, TextInput, Alert } from 'flowbite-react';

export default function UpdatePlaces() {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [files, setFiles] = useState([]);
    const [formData, setFormData] = useState({
        imageUrls: [],
        name: '',
        description: '',
        address: '',
        province: '',
        tourtype: '',
    });
    const [publishError, setPublishError] = useState(null);
    const { placeId } = useParams();
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(formData);

    useEffect(() => {
        try {
          const fetchPlace = async () => {
            const res = await fetch(`/api/place/getplaces?placeId=${placeId}`);
            const data = await res.json();
            if (!res.ok) {
              console.log(data.message);
              setPublishError(data.message);
              return;
            }
            if (res.ok) {
              setPublishError(null);
              setFormData(data.places[0]);
            }
          };
    
          fetchPlace();
        } catch (error) {
          console.log(error.message);
        }
      }, [placeId]);

    const handleImageSubmit = (e) => {
        if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
            setUploading(true);
            setImageUploadError(false);
            const promises = [];

            for (let i = 0; i < files.length; i++) {
                promises.push(storeImage(files[i]));
            }
            Promise.all(promises)
                .then((urls) => {
                    setFormData({
                        ...formData,
                        imageUrls: formData.imageUrls.concat(urls),
                    });
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
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };

    const handleRemoveImage = (index) => {
        setFormData({
            ...formData,
            imageUrls: formData.imageUrls.filter((_, i) => i !== index),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/place/updateplace/${formData._id}/${currentUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                setPublishError(data.message);
                return;
            }

            if (res.ok) {
                setPublishError(null);
                navigate(`/place/${data.slug}`);
            }
        } catch (error) {
            setPublishError('Something went wrong');
        }
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
                        <h1 className='text-3xl font-semibold text-center my-7'>Update a tour place</h1>

                        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>



                            <div className='flex flex-col gap-4 flex-1'>
                                <input type='text' placeholder='Name of the place' className='border-2 p-3 rounded-lg border-yellow-300' id='name' maxLength='62' minLength='10' onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                value={formData.name} />
                                <textarea type='text' placeholder='Description' className='border-2 p-3 rounded-lg border-yellow-300' id='description' onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
                                }
                                value={formData.description} />
                                <input type='text' placeholder='Address' className='border-2 p-3 rounded-lg border-yellow-300' id='address' onChange={(e) =>
                                    setFormData({ ...formData, address: e.target.value })
                                }
                                value={formData.address} />
                                <input type='text' placeholder='Province' className='border-2 p-3 rounded-lg border-yellow-300' id='province' onChange={(e) =>
                                    setFormData({ ...formData, province: e.target.value })
                                }
                                value={formData.province} />
                                <Select className='border-2 p-3 rounded-lg border-yellow-300' id='tourtype' onChange={(e) =>
                                    setFormData({ ...formData, tourtype: e.target.value })
                                }
                                value={formData.tourtype}>
                                    <option value='uncategorized'>Select a Type</option>
                                    <option value='Temple'>Temple</option>
                                    <option value='hplace'>Historical Place</option>
                                    <option value='Jungle'>Jungle</option>
                                    <option value='Waterfall'>Waterfall</option>
                                    <option value='Mountain'>Mountain</option>
                                </Select>

                                <p className='text-red-700 text-sm'>
                                    {imageUploadError && imageUploadError}
                                </p>
                                {formData.imageUrls.length > 0 &&
                                    formData.imageUrls.map((url, index) => (
                                        <div
                                            key={url}
                                            className='flex justify-between p-3 border items-center'
                                        >
                                            <img
                                                src={url}
                                                alt='listing image'
                                                className='w-20 h-20 object-contain rounded-lg'
                                            />
                                            <button
                                                type='button'
                                                onClick={() => handleRemoveImage(index)}
                                                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ))}
                                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                                    Update tour place
                                </button>

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
                                    <input onChange={(e) => setFiles(e.target.files)} className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple />
                                    <button type='button' disabled={uploading} onClick={handleImageSubmit} className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>{uploading ? 'Uploading...' : 'Upload'}</button>
                                </div>

                            </div>
                            {publishError && (
                                <Alert className='mt-5' color='failure'>
                                    {publishError}
                                </Alert>
                            )}



                        </form>


                    </div>
                </div>
            </div>
        </main>
    )
}
