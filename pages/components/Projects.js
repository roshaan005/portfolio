
import React from 'react';
import ProjectCard from './ProjectCard';

export const Projects = () => {
        const projs = [{name:'Metastic',tech:'Wordpress',tagLine:'✨ Building the future of web'},
     {name:'Nexum',tech:'React JS',tagLine:'🔥 Revolutionizing online learning and Content Creation'},
    {name:'Weatherly',tech:'webpack',tagLine:'☀️ A weather app with local storage'}
]


    return (
        <>
               {projs.map((proj) => (
        <ProjectCard key={proj.name} tech={proj.tech} name={proj.name} tagLine={proj.tagLine}/>
        ))}

       </>
    )
}


