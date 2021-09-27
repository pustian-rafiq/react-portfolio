import React from 'react'
import Separator from '../../common/Separator'
import SocialContact from '../../common/SocialContact'
import Download from '../../../assets/images/download.svg'
import Resume from '../../../assets/biodata.pdf'
import './contact.css'
function Contact () {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>
            If youwant to get update from us ,please contact the following link
          </p>
          <SocialContact />
        </div>
        <div className='download-section'>
          <a href={Resume} download className='download'>
            <img src={Download} alt='Resume' />
            Download
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
