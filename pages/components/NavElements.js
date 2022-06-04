import Link from 'next/link'
import React from 'react'


function NavElements() {
  return (
    <section className='hidden sm:hidden lg:block  lg:mt-5 lg:h-48 lg:w-8/12'>
    <div className='mt-6  lg:flex lg:flex lg:flex-col flex-row'>
      <span className='group mb-6 text-gray-300'>
        <span className='text-sm font-semibold text-gray-500'>01</span> 
        <span className="transition-s  mb-1 inline-block w-5 h-px mx-2 -mt-px group-hover:w-10 bg-gray-500 group-hover:bg-white transition"></span> 
        <Link href='/'> Projects</Link>
        </span>
        <span className='group mb-6 text-gray-300'>
        <span className='text-sm font-semibold text-gray-500'>02</span> 
        <span className="transition-s  mb-1 inline-block w-5 h-px mx-2 -mt-px group-hover:w-10 group-focus:w-10 bg-gray-500 group-hover:bg-white transition"></span> 
        <Link href='/Articles'> Articles</Link>
        </span>
        <span className='group mb-6 text-gray-300'>
        <span className='text-sm font-semibold text-gray-500'>03</span> 
        <span className="transition-s  mb-1 inline-block w-5 h-px mx-2 -mt-px group-hover:w-10 bg-gray-500 group-hover:bg-white transition"></span> 
        <Link href='/Contact'> Contact</Link>
        </span>
    </div>
    
 </section>
  )
}

export default NavElements