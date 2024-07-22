import React from 'react'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'
import Guidelines from '../components/Guidelines'
import Forms from '../components/Forms'

function Hotel() {
  return (<>
    <div>
      <Navbarr/>
      <div className='min-h-screen'>
        <Guidelines/>
        <Forms/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Hotel
