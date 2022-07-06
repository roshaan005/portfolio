
import React from 'react';
import ProjectCard from './ProjectCard';

export const Projects = () => {
        const projs = [{name:'Metastic',tech:'Wordpress',tagLine:'✨ Building the future of web',link:"https://metastic.io/"},
     {name:'Nexum',tech:'React JS',tagLine:'🔥 Revolutionizing online learning and Content Creation',link:"https://nexum-cgl.netlify.app/?#"},
    {name:'Weatherly',tech:'webpack',tagLine:'☀️ A weather app with local storage',link:"https://roshaan005.github.io/Weatherly/"}
]


    return (
        <>
               {projs.map((proj) => (
        <ProjectCard key={proj.name} tech={proj.tech} name={proj.name} tagLine={proj.tagLine} link={proj.link}/>
        ))}

       </>
    )
}


