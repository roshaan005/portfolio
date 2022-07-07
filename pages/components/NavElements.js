import Link from 'next/link'
import React, { useState } from 'react'
import Contact from '../Contact'



function ArticleTag({func,width}) {
    

  return (
    <span onClick={func} className='group mb-6 text-gray-300'>
    <span className='text-sm font-semibold text-gray-500'>01</span> 
    <span className={`transition-s  mb-1 inline-block w-${width} h-px mx-2 -mt-px group-hover:w-10 bg-gray-500 group-hover:bg-white transition`}></span> 
    <Link href='/'>Projects</Link>
    </span>
    
  )
}
function ProjectsTag({func,width}) {
    return (
        <span onClick={func} className='group mb-6 text-gray-300'>
        <span className='text-sm font-semibold text-gray-500'>02</span> 
        <span className={`transition-s  mb-1 inline-block w-${width} h-px mx-2 -mt-px group-hover:w-10 bg-gray-500 group-hover:bg-white transition`}></span> 
        <Link href='/Articles'>Articles</Link>
        </span>
    )
  }

  function ContactTag({func,width}) {
    return (
        <span onClick={func} className='group mb-6 text-gray-300'>
        <span className='text-sm font-semibold text-gray-500'>03</span> 
        <span className={`transition-s  mb-1 inline-block w-${width} h-px mx-2 -mt-px group-hover:w-10 bg-gray-500 group-hover:bg-white transition`}></span> 
        <Link href='/Contact'>Contact</Link>
        </span>
    )
  }
  
function NavElements() {
  const [status,setStatus] = useState({projects:"5",articles:"5",contact:"5"})
   const changeProjectStatus = ()=>{
       setStatus({projects:"10",articles:"5",contact:"5"})
   }
   const changeArticleStatus = ()=>{
    setStatus({projects:"5",articles:"10",contact:"5"})
}
const changeContactStatus = ()=>{
    setStatus({projects:"5",articles:"5",contact:"10"})
}
  return (
    <section className='hidden sm:hidden lg:block  lg:mt-5 lg:h-48 lg:w-8/12'>
    <div className='mt-6  lg:flex lg:flex lg:flex-col flex-row'>
     <ArticleTag func={changeProjectStatus} width={status.projects}/>
      <ProjectsTag func={changeArticleStatus} width={status.articles}/>
       <ContactTag func={changeContactStatus} width={status.contact}/>
    
    </div>
    
 </section>
  )
}

export default NavElements