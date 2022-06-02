import Layout from "./components/Layout"
import Navmobile from "./components/NavMobile"

export default function Articles() {
    return (
      <>
      <div className='grid w-full h-screen grid-phone sm:grid-phone sm:grid-cols-none lg:grid-cols-16 lg:grid-rows-none '>
       <Layout/>
        <div className='bg-green-200 h-auto'>
        <Navmobile/>
        </div>
      </div>
  
     </>
    )
  }
  