import React from 'react';
import ronaldo from '../assets/gifs/ronaldo.gif';
import speed from '../assets/gifs/speed.gif'
import kai from '../assets/gifs/kai.gif'
import rizz from '../assets/gifs/rizz.gif'
import reddit from '../assets/gifs/redditstories.gif'
import minecraft from '../assets/gifs/minecraft.gif'

function Viral() {
  const gifs = [
    ronaldo,    
    speed,
    kai,
    rizz,
    reddit,
    minecraft
  ];

  return (
    <div className='text-center justify-center items-center mt-20 mx-4 sm:mx-20'>
      <h1 className='font-inter text-md text-gray-500'>HUNDREDS OF VIRAL SHORTS</h1>
      <h1 className='font-inter text-md text-gray-500 mb-8'>HUNDREDS OF DIFFERENT NICHES</h1>
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 lg:gap-x-10 gap-y-5'>
          {gifs.map((gif, index) => (
            <div
              key={index}
              className='rounded-lg overflow-hidden hover:scale-110 transition duration-150 h-48 w-28 sm:h-64 sm:w-40 bg-gray-200'
            >
              <img src={gif} alt={`gif-${index}`} className='h-full w-full object-cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Viral;
