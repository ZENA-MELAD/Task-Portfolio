import React from 'react'
import Navbar from '../UI/Navbar/Navbar'
import Work from '../../Sections/Work/Work'
import ContactMe from '../../Sections/ContactMe/ContactMe'
import Footer from '../../Sections/Footer/Footer'


const FrameTwo = () => {
  return (
    <div className='bg-primary w-fit'>
      <Work/>
      <ContactMe/>
      <Footer/>
       </div>
  )
}

export default FrameTwo