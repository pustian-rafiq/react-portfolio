import React from 'react'
import Coding from '../../../assets/images/coding.png'
import './about.css'
import SocialContact from '../../common/SocialContact'
function About () {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          <p>
            Hello, I am<br />
            <span className='info-name'>Md. Rafiqul Islam</span>
            <br />
            I always love for coding.
          </p>
        </div>
        <div className='about-photo'>
          <img className='photo' src={Coding} alt='Coding' />
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About
