import React, { useState } from 'react';
import { HashLink as HLink } from 'react-router-hash-link';
import { Link as RLink } from 'react-router-dom';

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
              <li><HLink to="/#home" onClick={expandNav} smooth>Home</HLink></li>
              <li><HLink to="/#projects" onClick={expandNav} smooth>Projects</HLink></li>
              <li><HLink to="/#contact" onClick={expandNav} smooth>Contact</HLink></li>
              <li><RLink to="/blog" onClick={expandNav} smooth>Blog</RLink></li>
            </nav>
            : <IconEqualsOutline onClick={expandNav} />
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar