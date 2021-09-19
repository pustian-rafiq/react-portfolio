import React, {useState} from 'react'
import MobileIcon from '../../assets/images/menu.png'
import Web from './web/Web'
import Mobile from './mobile/Mobile'
import './header.css'
function Header() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
        <div className="logo">Rafiqul Islam</div>
        <div className="menu">
            <div className="web-menu">
                <Web/>
            </div>
            <div className="mobile-menu">
            <div onClick={()=> setIsOpen(!isOpen)}>
               <img src={MobileIcon} alt="Mobile Icon" className="menuIcon" />
            </div>
             
              {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
           
        </div>
    )
}

export default Header
