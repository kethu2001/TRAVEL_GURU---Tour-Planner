import React from 'react'
import beach from '../images/beach.png'
import Header from '../components/Header'

export default function Register() {
  return (
    <div>
        <Header />
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${beach})`, opacity: 0.6, backgroundSize: 'cover' }} />
    </div>
    
  )
}
