import React from 'react'
import watch from '../assets/watch.png'

function Hero() {
  return (
    <div className='flex flex-col mt-16 lg:mx-20 lg:flex-row items-center justify-between text-center lg:text-left font-inter p-6 lg:p-12'>
      {/* Text Section */}
      <div className='lg:w-1/2 mb-8 lg:mb-0'>
        <h1 className='font-extrabold text-4xl lg:text-6xl tracking-tight mb-6 !leading-[1.15]'>
          Make Your Shorts Go Viral in <span className="ml-3 mr-3 relative whitespace-nowrap"><span className="absolute bg-black -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span><span className="relative text-white">Days</span></span> Not Weeks
        </h1>
        <p className='text-lg lg:text-xl mb-6'>
          Use AI to get high-quality content ideas from different niches, integrating real-time statistics with accurate YouTube scrapes.
        </p>
        <p className='mb-6 text-lg lg:text-xl'>
          ✅ Instant Viral Videos
        </p>
        <button className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition'>
          Grow Your Shorts Today
        </button>
      </div>
      
      <div className='lg:w-1/2'>
        <img src={watch} alt='Hero Image' className='w-full h-auto object-cover rounded-lg shadow-lg' />
      </div>
    </div>
  )
}

export default Hero
