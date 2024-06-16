import React from 'react'
import {
    HiDocumentText
  } from 'react-icons/hi';
import down from '../images/download.png'
import { useSelector } from 'react-redux';

export default function Report() {

  const { currentUser } = useSelector((state) => state.user);

  const handleGenerateReport = async () => {
    try {
      const response = await fetch('reports/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify({ userId: currentUser._id }),
      });

      if (response.ok) {
        const reportData = await response.json();
        console.log('Report generated:', reportData);
        // Handle further actions like displaying the report or saving it
      } else {
        throw new Error('Failed to generate report');
      }
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };
  
  return (
    <div className='p-3 md:mx-auto'>
        <br/>
        <div className='flex-wrap flex gap-4 justify-center'>
            <div className='flex flex-col p-3 bg-blue-200 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h2 className='text-gray-500 text-md uppercase'>Travel Places</h2>
                    </div>
                    <HiDocumentText className='bg-lime-600  text-white rounded-full text-5xl p-3 shadow-lg' />
                </div>
                <div className="flex gap-2">
                  <button className="flex" onClick={handleGenerateReport}>
                    <img src={down} alt="Logo" style={{ width: '50px', height: '50px' }} />
                  </button>
                </div>


            </div>
        </div>
    </div>
  )
}
