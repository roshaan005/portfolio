import React from 'react';

const ProjectCard = ({tech,name,tagLine,link}) => {
    return (
        <div className='mt-5 hover:project-box-color-hover transition transform hover:scale-110 hover:body-color project-box-color width-99 lg:w-5/6 h-44'>
    <div className='pl-10 mt-8'>
    <span className='block  text-lg text-white mb-2'>{tech}</span>
    <span className='text-2xl hover:text-gray-500 text-white font-bold'><a href={link}>{name}</a></span>
    <span className='block mt-2 text-gray-400 pr-5'><a href={link}>{tagLine}</a></span>
  

    </div>
    
   
    
  </div>
        
    );
}

export default ProjectCard;
