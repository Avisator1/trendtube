import React from 'react'
import Navbar from './components/Navbar'
import Get from './components/Get'
import './components/Animation.css'
import Footer from './components/Footer'
import TestimonialPage from './components/TestimonialPage'
import FAQ from './components/anotherfq'

function PricingPage() {
  return (
    <div className='animate-fadeIn'>
      <Navbar />
      <div className='text-center items-center justify-center w-full bg-[#F7FAFC] py-8'>
      <h1 className='text-[#e895c5] text-lg mt-5'>Pricing</h1>
      <h1 className='text-center text-[#221d4b] justify-center text-4xl lg:text-6xl font-bold tracking-tight !leading-[1.15] mt-5'>
        We Keep It Simple.<br /><span className='opacity-70 text-3xl lg:text-5xl'>Affordable Pricing.</span>
      </h1>

      <div className='flex flex-col lg:flex-row justify-center items-center mt-10 space-y-8 lg:space-y-0 lg:space-x-8'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-80'>
          <h2 className='text-3xl text-left font-semibold text-[#221d4b]'>Essential Plan</h2>
          <p className='mt-4 text-left text-5xl font-bold text-[#e895c5]'>$5<span className='text-xl text-gray-950'>/mo</span></p>
          <ul className='mt-6 space-y-4 text-left'>
            <li>✔ 600 Credits/mo</li>
            <li>✔ 5 Niche Validators/mo</li>
            <li>✔ Analytic Features</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button className='mt-8 w-full bg-[#edc2db] text-gray-950 py-2 rounded-xl hover:scale-105 duration-150 transition'>Get Started</button>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-lg w-80'>
          <h2 className='text-3xl text-left font-semibold text-[#221d4b]'>Clipper Plan</h2>
          <p className='mt-4 text-left text-5xl font-bold text-[#e895c5]'>$10<span className='text-xl text-gray-950'>/mo</span></p>
          <ul className='mt-6 space-y-4 text-left'>
            <li>✔ 800 Credits/mo</li>
            <li>✔ 10 Niche Validators</li>
            <li>✔ More Analytic Features</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button className='mt-8 w-full bg-[#edc2db] text-gray-950 py-2 rounded-xl hover:scale-105 duration-150 transition'>Get Started</button>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-lg w-80'>
          <h2 className='text-3xl text-left font-semibold text-[#221d4b]'>Pro Plan</h2>
          <p className='mt-4 text-left text-5xl font-bold text-[#e895c5]'>$15<span className='text-xl text-gray-950'>/mo</span></p>
          <ul className='mt-6 space-y-4 text-left'>
            <li>✔ 1500 Credits/mo</li>
            <li>✔ Unlimited Niche Validators</li>
            <li>✔ More Analytic Features</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button className='mt-8 w-full bg-[#edc2db] text-gray-950 py-2 rounded-xl hover:scale-105 duration-150 transition'>Get Started</button>
        </div>
      </div>

      {/* Add the FAQ component here */}
      <FAQ />

    </div>
      <TestimonialPage />
      <Get />
      <Footer />
    </div>
  )
}

export default PricingPage
