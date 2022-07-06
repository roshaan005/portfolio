import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

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
  
  

export {ArticleTag,ProjectsTag,ContactTag}