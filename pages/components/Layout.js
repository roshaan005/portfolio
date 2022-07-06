import React from 'react'
import NavElements from './NavElements'
import Socials from './Socials'
import Link from 'next/link'
import Navmobile from './NavMobile'



function Layout() {
  return (

    <>
    
     <div className='flex justify-center  lg:items-start lg:items-center items-center h-auto'>
         <div className='w-5/6 mt-10 md:mt-32 mb-10 h-fit lg:flex lg:flex-col lg:justify-center lg:items-center '>
           <span className='text-white font-bold text-5xl md:text-7xl'>Roshan <span className='text-gradient'> Jalil</span></span>
           <span className='mt-3 text-white  text-xl lg:text-2xl block'>Web Developer. Writer-ish. Student</span>
           <div className=' mt-6  lg:w-8/12 set-padding  w-full  lg:mt-10 block text-gray-400 text-sm'>I am a high school student at the moment, coding for about 2 years. I have a knack for web tecnologies and anything related to coding and mathematics. I enjoy working with <span>React JS</span> and <span>Tailwind CSS</span>. I also have a blog :) </div>
           <NavElements/>
           <Socials/>
    
         </div>
       </div> 

     

   </>
   
      
      
  )
}

export default Layout