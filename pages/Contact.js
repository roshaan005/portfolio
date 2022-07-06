import Layout from "./components/Layout"
import Link from "next/link"
import Navmobile from "./components/NavMobile"
import Form from "./components/form"
import Footer from "./components/ Footer"

export default function Contact() {
    return (
      <>
     <div className='grid w-full h-screen grid-phone sm:grid-phone sm:grid-cols-none lg:grid-cols-16 lg:grid-rows-none '>
       <Layout/>
        <div className='gradient flex-col flex justify-center items-center  h-auto'>
        <Navmobile/>
       <div className='mb-5 lg:mt-10 flex flex-col  items-center  w-11/12 h-fit'>
          
           <section className='flex flex-col'>
<Form/>
           </section>


        
         <div>
           

         </div>
  
  </div>
        </div>
        <Footer/>
      </div>
  
     </>
    )
  }
  