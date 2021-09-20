import React from 'react'
import './web.css'
//import WebIcon from '../../../assets/images/menu.png'
function Web() {
    return (
        <div className="web">
          <div className="web-option">
            <a href="#project" className="web-menu">Project</a>
          </div>  
          <div className="web-option">
            <a href="#skill" className="web-menu">Skills</a>
          </div>  
          <div className="web-option">
            <a href="#work" className="web-menu">Work</a>
          </div>  
          <div className="web-option">
            <a href="#contact" className="web-menu">Contact</a>
          </div>  
          
        </div>
    )
}

export default Web
