import React from 'react'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Get from './components/Get'
import Footer from './components/Footer'
import GetPage from './components/GetPage'

const FeaturePage = () => {
  return (
    <div>
      <Navbar />
      <Feature />
      <GetPage />
      <Footer />
    </div>
  )
}

export default FeaturePage