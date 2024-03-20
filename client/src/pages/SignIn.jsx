import React from 'react'
import login from '../images/SignIn.png'
import Header from '../components/Header'

export default function SignIn() {
  return (
    <div>
        <Header />
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${login})`, opacity: 0.6, backgroundSize: 'cover' }} />
    </div>
  )
}
