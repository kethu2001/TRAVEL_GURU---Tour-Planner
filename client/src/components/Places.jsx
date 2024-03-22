import React from 'react'
import { HiPlus } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Places() {
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
                    </div>
                </div>
            </div>
        </main>
    )
}
