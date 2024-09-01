import React from 'react';

function Get() {
  return (
    <div className='bg-[#1a1a1a] text-center flex flex-col justify-center items-center h-[500px] !font-inter'>
      <h1 className='text-white text-4xl md:text-6xl font-bold mb-4'>
        Ready to get TrendTube? Join us today!
      </h1>
      <p className='text-gray-400 text-lg md:text-xl mb-8'>
        Stop posting bland shorts that have no change of getting any attention on YouTube.<br className='hidden lg:block' /> With TrendTube you will be one step closer to acheving your goals.
      </p>
      <div className='flex space-x-4'>
        <button className='bg-blue-300 text-gray-950 px-6 py-3 rounded-full text-lg md:text-xl'>
          Start Growing Today
        </button>
        <button className='text-gray-400 text-lg md:text-xl'>
          Cancel anytime
        </button>
      </div>
    </div>
  );
}

export default Get;
