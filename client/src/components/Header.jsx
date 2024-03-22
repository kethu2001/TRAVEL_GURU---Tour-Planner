import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-blue-800 shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
          <img src={logo} alt="Logo" className="h-24 flex flex-wrap" />
        </Link>
        
        <ul className='flex gap-5 items-center'>
          <li className='hidden sm:inline text-white hover:underline'>Home</li>
          <li className='hidden sm:inline text-white hover:underline'>About</li>
          <li className='hidden sm:inline text-white hover:underline'>Tour</li>
        </ul>

        <div className='space-x-4'>
          <Link to='/register'>
            <button className='bg-white text-black rounded-lg uppercase hover:opacity-95 p-3 shadow-md'>Register</button>
          </Link>
          <Link to='/signin'>
            <button className='bg-white text-black rounded-lg uppercase hover:opacity-95 p-3 shadow-md'>Sign in</button>
          </Link>
          
        </div>
      </div>
      
    </header>
  )
}