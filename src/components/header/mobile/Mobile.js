import React from 'react'
import CloseIcon from '../../../assets/images/cancel.png'
import './mobile.css'
function Mobile ({ isOpen, setIsOpen }) {
  return (
    <div className='mobile'>
      <div className='close-icon'>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={CloseIcon}
          alt='Mobile Icon'
          style={{ height: '20px', width: '20px' }}
        />
      </div>
      <div className='mobile-options'>
        <div className='mobile-option'>
          <a href='#project' className='mobile-menu'>
            Project
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#skill' className='mobile-menu'>
            Skills
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#work' className='mobile-menu'>
            Work
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#contact' className='mobile-menu'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Mobile
