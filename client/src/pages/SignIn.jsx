// import React from 'react'
import login from '../images/SignIn.png'
import Header from '../components/Header'

import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TravelGuruLogo from '../images/TravelGuruLogo.png';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

 
  return (
    <div>
        <Header />
        {/* <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${login})`, opacity: 0.6, backgroundSize: 'cover' }} /> */}
        <div className="flex justify-center items-center h-screen bg-gray-200">

<img src={login} alt="" className="fixed object-cover w-full h-full z-0 opacity-60" />

<div className="w-full max-w-sm p-8 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-lg z-10 opacity-85">

  <img src={TravelGuruLogo} alt="" className="object-cover" style={{ transform: 'translateX(120px)', width: '100px', height: '100px' }} />


  <form onSubmit={handleSubmit} className="flex flex-col gap-4">




    <input type="email" placeholder="Email" className="border p-3 rounded-lg  border-blue-300 bg-gray-300 text-xs" id="email" onChange={handleChange} />
    <input type="password" placeholder="Password" className="border p-3 rounded-lg  border-blue-300 bg-gray-300 text-xs" id="password" onChange={handleChange} />
    <button disabled={loading} className="bg-blue-800 text-white p-3 rounded-lg  hover:bg-blue-600 disabled:opacity-50 text-xs" type="submit">
      {loading ? 'Loading...' : <span style={{ color: '#FFFFFF' }}>Sign In</span>}
    </button>
    <p className='text-xs'>Don't have an account? <Link to="/sign-up" className="text-blue-500" style={{ color: '#0045A6' }}>Register</Link></p>
    <div className="flex items-center">
      <hr className='border-black w-5/12 opacity-40' />
      <span className="mx-4 opacity-40">or</span><hr className='border-black w-5/12 opacity-40' />
    </div>          
    
    {/* <OAuth/>
    <OAuthFB/> */}

  </form>
  <div className="text-center mt-4">


  </div>
  {error && <p className="text-red-500 mt-5">{error}</p>}
</div>

</div>
</div>
  )
}
