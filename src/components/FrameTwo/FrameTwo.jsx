import React from 'react'
import Navbar from '../UI/Navbar/Navbar'
import Work from '../../Sections/Work/Work'
import ContactMe from '../../Sections/ContactMe/ContactMe'
import Footer from '../../Sections/Footer/Footer'
import Img from "../../assets/images/Group 1201.png"

const FrameTwo = () => {
  return (
    <div className='bg-primary w-fit relative'>
      <Work/>
      <ContactMe/>
      <Footer/>
      <div className=' hidden lg:flex absolute bottom-32 -right-5 pointer-events-none  w-11/12 xl:bottom-24'>
        <img src={Img}/>
      </div>
       </div>
  )
}

export default FrameTwo