import React from 'react'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'
import VolunteerSection from '../components/Volunteersection'



function Vol() {
  return (<>
    <div>
      <Navbarr/>
      <div className='min-h-screen'>
        <VolunteerSection/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Vol
