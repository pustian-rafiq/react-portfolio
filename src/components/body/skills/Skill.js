import React from 'react'
import Separator from '../../common/Separator'
import { skillsData } from '../../data/skillsData'
import SkillCard from './SkillCard'
import './skill.css'
function Skill () {
  const data = skillsData
  return (
    <div className='skills'>
      <Separator />
      <label className='section-title'>SKills</label>
      <div className='skills-container'>
        {data.map(item => {
          return (
            <div className='skills-section'>
              <label className='skills-section-title'>
                {item.type}
              </label>
              <div className='skills-list'>
                {item.list.map(skill => {
                  return <SkillCard skill={skill} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skill
