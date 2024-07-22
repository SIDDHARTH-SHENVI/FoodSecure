import React from 'react'
import Navbarr from '../components/Navbarr'

import Footer from '../components/Footer'
import Freefood from '../components/Freefood'
import FeaturedHotel from '../components/featured'




function Donor() {
  return (
    <div>
      <Navbarr/>
      <div className='min-h-screen overflow-x-hidden'>
      <Freefood/>
      <FeaturedHotel/>
      </div>
      <Footer/>
    </div>
  )
}

export default Donor
