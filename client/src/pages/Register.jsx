import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import OAuth from '../components/OAuth';

import TravelGuruLogo from '../images/TravelGuruLogo.png';
// import www3 from '../images/www3.png';
// import OAuthFB from '../components/OAuthFB';
import beach from '../images/beach.png'
import Header from '../components/Header'

export default function Register() {
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
      //submit the form
      const res = await fetch('/api/auth/signup',
        {
          method: "POST",
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify(formData),
        });
      //convert results to json
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

  };
  return (
    
    <div>
    <Header />
  
    <div className="h-screen bg-cover bg-center " style={{ backgroundImage: `url(${beach})`, opacity: 0.9, backgroundSize: 'cover' }}>
      <div className="w-full max-w-sm p-8 bg-white border border-gray-300 border-solid rounded-lg drop-shadow-lg z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 translateY(50%) translateY(-100px)">
        <img src={TravelGuruLogo} alt="" className="object-cover" style={{ transform: 'translateX(120px)', width: '100px', height: '100px' }} />
  
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type="text" placeholder='Enter UserName' className='border p-3 rounded-lg border-blue-300 bg-gray-300 text-xs ' id='username' onChange={handleChange} />
          <input type="email" placeholder='Email' className='border p-3 rounded-lg  border-blue-300 bg-gray-300 text-xs' id='email' onChange={handleChange} />
          <input type="password" placeholder='Password' className='border p-3 rounded-lg  border-blue-300 bg-gray-300 text-xs' id='password' onChange={handleChange} />
          <button disabled={loading} className='bg-blue-700 text-white p-3 rounded-lg  hover:opacity-95 disabled:opacity-80 text-xs'>{loading ? 'Loading...' : 'Register'}</button>
  
          <div className='flex gap-1 text-xs'>
            <p>Already Have an account?</p>
  
            <Link to={"/sign-in"}>
              <span className='text-blue-700'>Sign in</span>
            </Link>
          </div>
          <div className="flex items-center">
            <hr className='border-black w-5/12 opacity-40' />
            <span className="mx-4 opacity-40">or</span><hr className='border-black w-5/12 opacity-40' />
          </div>
  
          {/* <OAuth />
  <OAuthFB/> */}
        </form>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
    </div>
  
  </div>
  )
}
