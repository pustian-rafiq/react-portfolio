import React from 'react'
import { projectsData } from '../../data/projectData'
import ProjectCard from './ProjectCard'
import './project.css'
function Project () {
  const data = projectsData
  return (
    <div className='projects'>
      <label>Projects</label>
      <div>
        {data.map(project => {
          return <ProjectCard project={project} />
        })}
      </div>
    </div>
  )
}

export default Project
