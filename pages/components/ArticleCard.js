import React from 'react'

function ArticleCard({title,description,date,icon}) {

  return (

    <div className='h-44 grid grid-cols-half lg:mt-5 lg:mb-4  mt-5 mb-5 w-full lg:w-11/12'>
    <div className=' flex justify-center items-center'>
        <div className='w-24 md:h-32 md:w-32 h-24 text-3xl text-white flex lg:text-5xl justify-center items-center  project-box-color emoji circle'>

        {icon}
        </div>
    </div>
    <section className='pl-2 text-white'>
        <span className='mt-6 md:text-3xl font-bold text-2xl block'>{title}</span>
        <span className='block text-gray-400 mt-2 mb-3 md:text-lg text-sm'>{description}</span>
        <span className='font-semibold '>{date}</span>
    </section>

 </div>
   
  )
}

export default ArticleCard