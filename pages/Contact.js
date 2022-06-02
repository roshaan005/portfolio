import Layout from "./components/Layout"
import Link from "next/link"
import Navmobile from "./components/NavMobile"

export default function Contact() {
    return (
      <>
      <div className='grid w-full h-screen grid-phone sm:grid-phone sm:grid-cols-none lg:grid-cols-16 lg:grid-rows-none bg-red-100'>
       <Layout/>

        <div className='bg-blue-200 h-auto'>
         
 <Navmobile/>
        </div>
      </div>
  
     </>
    )
  }
  