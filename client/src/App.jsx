
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import UpdatePlaces from './pages/UpdatePlaces';
import Placepage from './pages/Placepage';
import Header from './components/Header';
import Profile from './pages/Profile';
import ScrollToTop from './components/ScrollToTop';
import Tour from './pages/Tour';
import Stportal from './pages/Stportal';
import Traditional from './pages/Traditional';
import Restaurants from './pages/Restaurants';
import Attraction from './pages/Attractions';
import Pottery from './pages/Pottery';
import Mask from './pages/Mask';
import Wood from './pages/Wood';
import Handloom from './pages/Handloom';
import EmergencyMap from './pages/EmergencyMap';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/tours' element={<Tour />} />
        <Route path='/stportal' element={<Stportal />} />
        <Route path='/traditional' element={<Traditional />} />
        <Route path='/restaurant' element={<Restaurants />} />
        <Route path='/attraction' element={< Attraction/>} />
        <Route path='/pottery' element={< Pottery/>} />
        <Route path='/mask' element={< Mask/>} />
        <Route path='/wood' element={< Wood/>} />
        <Route path='/handloom' element={< Handloom/>} />
        <Route path='/EmergencyMap' element={<EmergencyMap/>} />
        <Route path='/update-place/:placeId' element={<UpdatePlaces />} />
        <Route path='/place/:placeSlug' element={<Placepage />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
