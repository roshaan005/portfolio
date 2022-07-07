import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'
import NavElements from './components/NavElements'
import Socials from './components/Socials'
import Navmobile from './components/NavMobile'
import Projects from './components/Projects'
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



  