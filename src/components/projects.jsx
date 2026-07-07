import React from 'react'
import Pcards from './pcards'
import projectData from '../data/projects.json'

const Projects = () => {
  return (
    <div id='projects' >
      <div className="headlines flex justify-between bg-[#121412]">
        <h1 className='text-white md:font-bold text-2xl ml-[3%]' >SELECTED WORKS</h1>
        <p className='text-[#77a02e] text-[13px] mr-[3%] '>MY WORKS</p>
      </div>
    <Pcards  data={projectData}/>
      
    </div>
  )
}

export default Projects
