import React from 'react';

const ProjectCard = ({tech,name,tagLine}) => {
    return (
        <div className='mt-5  project-box-color width-99 lg:w-5/6 h-44'>
    <div className='pl-10 mt-8'>
    <span className='block text-lg text-white mb-2'>{tech}</span>
    <span className='text-2xl text-white font-bold'>{name}</span>
    <span className='block mt-2 text-gray-400 pr-5'>{tagLine}</span>
  

    </div>
    
   
    
  </div>
        
    );
}

export default ProjectCard;
