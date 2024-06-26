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
