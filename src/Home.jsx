import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './components/Animation.css'
import Viral from './components/Viral';
import Testimonials from './components/Testimonials';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import Get from './components/Get';
import Footer from './components/Footer';


const Home = () => {


  return (
    <div className='animate-fadeIn scroll-smooth'>
      <Navbar />
      <Hero />
      <Viral />
      <Testimonials />
      <Feature  />
      <Pricing />
      <Get />
      <Footer />
    </div>
  );
};

export default Home;