import React from 'react'
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-blue-800 shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
          <img src={logo} alt="Logo" className="h-24 flex flex-wrap" />
        </Link>
        
        <ul className='flex gap-5 items-center'>
          <Link to='/'>
          <li className='hidden sm:inline text-white hover:underline cursor-pointer'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='hidden sm:inline text-white hover:underline cursor-pointer'>About</li>
          </Link>
          <Link to='/tours'>
          <li className='hidden sm:inline text-white hover:underline cursor-pointer'>Tour</li>
          </Link>
        </ul>

        <div className='space-x-4'>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            {currentUser.isAdmin ? (
      <>
        <Link to={'/dashboard?tab=profile'}>
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
      </>
    ) : (
      <>
        <Link to='/profile'>
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
      </>
    )}
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown>
        ) :  (
          <>
          <Link to='/register'>
            <button className='bg-white text-black rounded-lg uppercase hover:opacity-95 p-3 shadow-md'>Register</button>
          </Link>
          <Link to='/signin'>
            <button className='bg-white text-black rounded-lg uppercase hover:opacity-95 p-3 shadow-md'>Sign in</button>
          </Link>
          </>
        )}
        </div>
      </div>
      
    </header>
  )
}