import React from 'react'
import logo from '../images/logo.png'
import Glogo from '../images/G+.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

export default function Footer() {
  return (
    <footer className='bg-blue-800 shadow-md'>
        <div className="flex flex-col items-center">
            <img src={logo} alt="Logo" className="h-24 flex flex-wrap items-center " />

            <div className=''>
                <span className='text-2xl text-white flex flex-auto items-center'>DISCOVER YOUR NEXT ADVENTURE</span>
            </div>

            <div className='flex space-x-6 mt-4'>
                <img src={Glogo} alt="Logo" className="h-12" />
                <img src={facebook} alt="Logo" className="h-11 " />
                <img src={twitter} alt="Logo" className="h-11 flex" />
                <img src={instagram} alt="Logo" className="h-11 flex " />
            </div>

            <ul className='flex gap-8 items-center mt-4'>
                <li className='hidden sm:inline text-white hover:underline'>About us</li>
                <li className='hidden sm:inline text-white hover:underline'>Terms and Conditions</li>
                <li className='hidden sm:inline text-white hover:underline'>Privacy Policy</li>
                <li className='hidden sm:inline text-white hover:underline'>Contact us</li>
            </ul>

            <hr className='border-t-2 border-white w-1/2 my-4' />

            <div className=''>
                <span className='text-white flex flex-auto items-center'>Travel Guru © 2024. All rights reserved.</span>
            </div>
            <br />
        </div>
    </footer>
  )
}
