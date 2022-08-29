import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
              <li><NavLink to="/" onClick={expandNav}>Home</NavLink></li>
              <li><NavLink to="/projects" onClick={expandNav}>Projects</NavLink></li>
              <li><NavLink to="/contact" onClick={expandNav}>Contact</NavLink></li>
            </nav>
            : <IconEqualsOutline onClick={expandNav} />
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar