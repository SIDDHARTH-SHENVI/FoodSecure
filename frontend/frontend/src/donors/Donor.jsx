import React from 'react'
import Navbarr from '../components/Navbarr'

import Footer from '../components/Footer'
import Freefood from '../components/Freefood'

function Donor() {
  return (
    <div>
      <Navbarr/>
      <div className='min-h-screen'>
      <Freefood/>
      </div>
      <Footer/>
    </div>
  )
}

export default Donor
