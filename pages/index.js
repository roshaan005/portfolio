import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'
import NavElements from './components/NavElements'
import Socials from './components/Socials'

import Navmobile from './components/NavMobile'
import ProjectCards, { Projects } from './components/Projects'
import Footer from './components/ Footer'
export default function Home() {
  return (
  
    <div className='grid w-full h-screen grid-phone sm:grid-phone sm:grid-cols-none lg:grid-cols-16 lg:grid-rows-none '>
     <Layout/>

      <div className='gradient flex-col flex justify-center items-center  h-auto'>
       
<Navmobile/>

<div className='mb-5  flex flex-col  items-center w-5/6 h-fit'>
  
  
  
    
 
    
   
  <Projects/>
  
</div>
      </div>
      <Footer/>
    </div>

  )
}



    {/* <section className='md:lg:flex justif-center  items-center md:lg:fixed  md:lg:w-2/3 md:lg:h-1/2 md:lg:mt-20'>
     <section className='md:flex md:flex-col  bg-green-100 md:pl-12 md:pr-10 md:w-3/4  md:h-72'>
      <div className='sm:mt-32 mt-32 bg-red-100 sm:flex flex flex-col sm:flex-col items-center sm:flex-col sm:items-center'>
       <div className='sm:text-6xl text-5xl text-white font-bold'>Roshan Jalil</div>
       <div className='text-white font-semibold sm:text-2xl text-lg mt-5'>Staff Software Engineer at Algolia</div>
       <div className='text-gray-500 pl-16 pr-12 text-sm mt-10 sm:pl-40 sm:pr-32'>I build open-source front-end libraries at Algolia and host the Developer Experience podcast. I cant shut up about test-driven development and utility-first CSS. I also share what I learn on my blog and in conferences around the world.</div>
      </div>

     </section>


    </section>
   <div className='sm:md:lg:absolute sm:lg:md:right-0 sm:lg:md:h-screen sm:lg:md:w-2/4 md:sm:lg:c'>
     <div className='sm:md:lg:flex sm:md:lg:flex-col sm:md:lg:justify-center sm:md:lg:items-center sm:md:lg:w-full sm:md:lg:h-full md:lg:bg-red-200'>
      
       <div className='md:lg:mt-16 md:lg:bg-gray-700 w-3/4 h-52'></div>
       <div className='md:lg:mt-5 md:lg:bg-gray-700 w-3/4 h-52'></div>
       <div className='md:mb-16 md:lg:mt-5 md:lg:bg-gray-700 w-3/4 h-52'></div>


      
     </div>


   </div> */}
   