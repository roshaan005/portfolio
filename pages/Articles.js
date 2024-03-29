import Layout from "./components/Layout"
import Navmobile from "./components/NavMobile"
import Head from "next/head"
import ArticlesSection from "./components/ArticlesSection"
import Footer from "./components/ Footer"

export default function Articles() {
    return (
      <>
       <Head>
        <title>Articles</title>
        <link rel="icon" href="../public/favicon.ico" />
       
        
        
      </Head>



      <div className='grid w-full h-screen grid-phone sm:grid-phone sm:grid-cols-none lg:grid-cols-16 lg:grid-rows-none '>
       <Layout/>
        <div className='gradient flex-col flex justify-center items-center  h-auto'>
        <Navmobile/>
       <div className='mb-5 lg:mt-10 flex flex-col  items-center  w-11/12 h-fit'>

        
         <ArticlesSection/>
  
  </div>
        </div>
        <Footer/>

      </div>
  
     </>
    )
  }
  