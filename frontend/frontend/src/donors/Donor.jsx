import React from 'react'
import Navbarr from '../components/Navbarr'
import Donors from '../components/Donors'
import Footer from '../components/Footer'

function Donor() {
  return (
    <div>
      <Navbarr/>
      <div className='min-h-screen'>
      <Donors/>
      </div>
      <Footer/>
    </div>
  )
}

export default Donor
