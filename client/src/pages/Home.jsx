import React from 'react'
import Header from '../components/Header'
import heroimg01 from '../images/heroimg01.jpg'
import heroimg02 from '../images/heroimg02.jpg'
import herovideo from '../images/herovideo.mp4';

export default function Home() {
  return (
    <div>
      <Header />
    <div>
    <section className="py-8">
  <div className="container flex items-center mx-20 ">
    <div className="lg:w-2/4 lg:pr-8 mt-[-200px] w-10">
      <h1 className="text-3xl font-bold mt-4">Starting on journeys unlocks the gateway to forging unforgettable <span className="text-yellow-300">memories</span></h1>
      <p className="mt-4">Beginning travels sets the stage for crafting cherished memories that last a lifetime. Whether it's exploring new destinations or revisiting familiar paths, each journey holds the potential for unforgettable experiences and meaningful connections with the world around us.</p>
    </div>
    <div className="w-1/2 flex justify-between ml-[-80px]">
      <div className="w-2/3 h-80 border-2 rounded-lg overflow-hidden mx-2 border-yellow-300 ">
        <img src={heroimg01} alt='' className="w-full h-full object-cover" />
      </div>
      <div className="w-2/3 h-80 border-2 rounded-lg overflow-hidden my-10 border-yellow-300">
        <video src={herovideo} alt='' className="w-full h-full object-cover" controls autoPlay muted loop playsInline />
      </div>
      <div className="w-2/3 h-80 border-2 rounded-lg overflow-hidden mx-2 my-20 border-yellow-300">
        <img src={heroimg02} alt='' className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>
</div>
</div>
  )
}
