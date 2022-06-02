import React from 'react';
import Link from 'next/link';

const Navmobile = () => {
    return (
        <section className='sticky lg:hidden xl:hidden flex justify-center  body-color w-full h-16'>
        <div className='mt-5 font-semibold'>
    <span className='ml-6 mr-6 mt-2 text-gray-500'>
<Link href='/'> Projects</Link>
</span>
<span className='ml-6 mr-6  mt-2 text-gray-500'>
<Link href='/Articles'> Articles</Link>
</span>
<span className='ml-6 mr-6  mt-2 text-gray-500'>
<Link href = '/Contact'> Contact</Link>
</span>
        
</div>


    </section>

    );
}

export default Navmobile;

