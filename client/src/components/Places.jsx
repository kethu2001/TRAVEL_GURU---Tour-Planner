import { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { HiPlus } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { set } from 'mongoose';

export default function Places() {
    const { currentUser } = useSelector((state) => state.user);
    const [userPlaces, setUserPlaces] = useState([]);
    const [showMore, setShowMore] = useState(true);
    console.log(userPlaces);
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const res = await fetch(`/api/place/getplaces?userId=${currentUser._id}`);
                const data = await res.json();
                if (res.ok) {
                    setUserPlaces(data.places);
                    if (data.places.length < 9) {
                        setShowMore(false);
                      }
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        if (currentUser.isAdmin) {
            fetchPlaces();
        }
    }, [currentUser._id]);

    const handleShowMore = async () => {
        const startIndex = userPlaces.length;
        try {
          const res = await fetch(
            `/api/place/getplaces?userId=${currentUser._id}&startIndex=${startIndex}`
          );
          const data = await res.json();
          if (res.ok) {
            setUserPlaces((prev) => [...prev, ...data.places]);
            if (data.places.length < 9) {
              setShowMore(false);
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      };
    return (
        <main className='p-8 mx-auto bg-slate-50'>
            <div className='flex justify-center  '>
                <div className='border-2 p-8 rounded-lg border-yellow-300 bg-red-100 shadow-xl mt-12 w-screen'>
                    <div className='border-2 p-7 rounded-lg border-yellow-300 bg-slate-300 shadow-xl w-9/12 mx-10 '>
                        <Link to='/dashboard?tab=addplaces'>
                            <Button color="blue">
                                <HiPlus className="mr-2 h-5 w-5" />
                                Add Place
                            </Button>
                        </Link>

                        <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
                            {currentUser.isAdmin && userPlaces.length > 0 ? (
                                <>
                                    <Table hoverable className='shadow-md'>
                                        <Table.Head>
                                            <Table.HeadCell>Date updated</Table.HeadCell>
                                            <Table.HeadCell>Tour Place image</Table.HeadCell>
                                            <Table.HeadCell>Tour place title</Table.HeadCell>
                                            <Table.HeadCell>Type</Table.HeadCell>
                                            <Table.HeadCell>Delete</Table.HeadCell>
                                            <Table.HeadCell>
                                                <span>Edit</span>
                                            </Table.HeadCell>
                                        </Table.Head>
                                        {userPlaces.map((place) => (
                                            <Table.Body className='divide-y'>
                                                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                                                    <Table.Cell>
                                                        {new Date(place.updatedAt).toLocaleDateString()}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link to={`/place/${place.slug}`}>
                                                            <img
                                                                src={place.imageUrls[0]}
                                                                alt={place.name}
                                                                className='w-20 h-10 object-cover bg-gray-500'
                                                            />
                                                        </Link>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link
                                                            className='font-medium text-gray-900 dark:text-white'
                                                            to={`/post/${place.slug}`}
                                                        >
                                                            {place.name}
                                                        </Link>
                                                    </Table.Cell>
                                                    <Table.Cell>{place.tourtype}</Table.Cell>
                                                    <Table.Cell>
                                                        <span className='font-medium text-red-500 hover:underline cursor-pointer'>
                                                            Delete
                                                        </span>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link
                                                            className='text-teal-500 hover:underline'
                                                            to={`/update-place/${place._id}`}
                                                        >
                                                            <span>Edit</span>
                                                        </Link>
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        ))}
                                    </Table>
                                    {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
                                </>
                            ) : (
                                <p>You have no posts yet!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
