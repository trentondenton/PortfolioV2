import React, { useState } from 'react';

import { IconEqualsOutline } from './icons';
import Logo from '../assets/images/logo.png';

function Navbar() {
  const [isExpanded, setisExpanded] = useState(false)
  const expandNav = () => { setisExpanded(!isExpanded) }
  return (
    <div className="navigation-container">
      <div className="nav-logo">
        <img alt="logo" src={Logo}></img>
      </div>
      <div className="nav-menu">
        <ul>
          {isExpanded ?
            <nav className="nav-menu-open">
              <li>""</li>
              <li><a href="#home" onClick={expandNav}>Home</a></li>
              <li><a href="#projects" onClick={expandNav}>Projects</a></li>
              <li><a href="#contact" onClick={expandNav}>Contact</a></li>
            </nav>
            : <IconEqualsOutline onClick={expandNav} />
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar