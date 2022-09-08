import React, { useState } from 'react';
import { HashLink as HLink } from 'react-router-hash-link';
import { Link as RLink } from 'react-router-dom';

import { IconEqualsOutline } from './icons';
import Logo from '../assets/images/logo.png';

function Navbar() {
  const [isExpanded, setisExpanded] = useState(false);
  const expandNav = () => { setisExpanded(!isExpanded) };
  const handleMouseLeave = (e) => { setisExpanded(false) };
  const handleMouseEnter = (e) => { setisExpanded(true) };

  return (
    <div className="navigation-container">
      <div className="nav-logo">
        <img alt="logo" src={Logo}></img>
      </div>
      <div className="nav-menu">
        <ul>
          {isExpanded ?
            <nav className="nav-menu-open" onMouseLeave={handleMouseLeave}>
              <li><HLink to="/#home" onClick={expandNav}>Home</HLink></li>
              <li><HLink to="/#projects" onClick={expandNav}>Projects</HLink></li>
              <li><HLink to="/#contact" onClick={expandNav}>Contact</HLink></li>
              <li><RLink to="/blog" onClick={expandNav}>Blog</RLink></li>
            </nav>
            : <IconEqualsOutline onClick={expandNav} onMouseEnter={handleMouseEnter} />
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar