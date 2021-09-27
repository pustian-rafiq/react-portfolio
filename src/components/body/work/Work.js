import React from 'react'
import Separator from '../../common/Separator'
import WorkCard from './WorkCard'
import { workData } from '../../data/workData'
import './work.css'

function Work () {
  const data = workData
  return (
    <div className='work'>
      <Separator />
      <label className='section-title'>Work</label>
      <div className='work-list'>
        {data.map(item => {
          return <WorkCard item={item} />
        })}
      </div>
    </div>
  )
}

export default Work
