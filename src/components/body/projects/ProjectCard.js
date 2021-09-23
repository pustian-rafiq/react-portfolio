import React from 'react'
import GlobeIcon from '../../../assets/images/globe.svg'
function ProjectCard ({ project }) {
  return (
    <div className='project-card'>
      <div className='project-info'>
        <label className='project-title'>
          {project.title}
        </label>
        <div className='project-links'>
          {project.demo &&
            <a className='project-link' href={project.demo}>
              <div className='link-button'>
                <img src={GlobeIcon} alt='Globe' />
                <span>Demo</span>
              </div>
            </a>}
          {project.github &&
            <a className='project-link' href={project.github}>
              <div className='link-button'>
                <i class='devicon-github-original colored' />Github
              </div>
            </a>}
        </div>
        <p>
          {project.about}
        </p>
        <div className='project-tags'>
          {project.tags.map(tag => {
            return (
              <label className='tag'>
                {tag}
              </label>
            )
          })}
        </div>
      </div>
      <img className='project-photo' src={project.image} alt='Project' />
    </div>
  )
}

export default ProjectCard
