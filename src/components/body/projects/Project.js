import React from 'react'
import { projectsData } from '../../data/projectData'
import ProjectCard from './ProjectCard'
import './project.css'
import Separator from '../../common/Separator'
function Project () {
  const data = projectsData
  return (
    <div className='projects'>
      <Separator />
      <label className='section-title'>Projects</label>
      <div>
        {data.map(project => {
          return <ProjectCard project={project} />
        })}
      </div>
    </div>
  )
}

export default Project
