import Link from 'next/link'
import React from 'react'


function NavElements() {
  return (
    <section className='hidden sm:hidden lg:block  lg:mt-5 lg:h-48 lg:w-8/12'>
    <div className='mt-6  lg:flex lg:flex lg:flex-col flex-row'>
      <span className='mb-6 text-gray-300'>
        <span className='text-sm text-gray-500'>01- </span><Link href='/'> Projects</Link>
      </span>
      <span className='mb-6 text-gray-300'>
        <span className='text-sm text-gray-500'>02- </span><Link href='/Articles'> Articles</Link>
      </span>
      <span className='mb-6 text-gray-300'>
        <span className='text-sm text-gray-500'>03- </span><Link href = '/Contact'> Contact</Link>
      </span>
    </div>
    
 </section>
  )
}

export default NavElements