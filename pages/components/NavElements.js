import Link from 'next/link'
import React, { useState } from 'react'
import Contact from '../Contact'
import NavEl, { ArticleTag, ContactTag, ProjectsTag } from './NavEl'


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