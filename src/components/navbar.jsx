import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import { Navbar as NavBar, Nav, Image } from 'react-bootstrap';

import Logo from '../assets/images/logo2.png';

function Navbar() {
  const [active, setActive] = useState('default');

  return (
    <div>
      <NavBar
        variant='light'
        bg='white'
        expand='md'
        label='navigation'
        style={{ maxWidth: '100vw' }}
        className='fixed-top'
      >
        <NavBar.Brand href='/'>
          <Image alt='logo' src={Logo} />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls='basic-navbar-nav' />
        <NavBar.Collapse id='basic-navbar-nav'>
          <Nav
            activeKey={active}
            default='/#home'
            onSelect={selectedKey => setActive(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link as={HLink} to='/#home' eventKey='/'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={HLink} to='/#projects' eventKey='/#projects'>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={HLink} to='/#chart' eventKey='/#chart'>
                Activity Chart
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={HLink} to='/#contact' eventKey='/#contact'>
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to='/blog' eventKey='/blog'>
                Blog
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
      <Outlet />
    </div>
  );
}

export default Navbar;
