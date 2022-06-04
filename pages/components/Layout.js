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
           <span className='text-white font-bold text-5xl md:text-7xl'>Roshan Jalil</span>
           <span className='mt-3 text-white  text-xl lg:text-2xl block'>Developer. Noob writer. Student</span>
           <div className=' mt-6  lg:w-8/12 set-padding  w-full  lg:mt-10 block text-gray-400 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia a hic enim? Debitis tenetur cumque veritatis quibusdam, adipisci ullam modi repellendus expedita distinctio! Possimus, vel vero eos asperiores corrupti ullam.</div>
           <NavElements/>
           <Socials/>
    
         </div>
       </div> 

     

   </>
   
      
      
  )
}

export default Layout