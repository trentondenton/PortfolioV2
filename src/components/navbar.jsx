import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Navbar as NavBar,
  Nav,
  Image
} from 'react-bootstrap';

import Logo from '../assets/images/logo2.png';

function Navbar() {
  const location = useLocation();
  return (
    <NavBar variant="light" bg="white" expand="md" label="navigation" className="navbar fixed-top">
      <NavBar.Brand href="/">
        <Image alt="logo" src={Logo} />
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav activeKey={location.pathname}>
          <Nav.Item>
            <Nav.Link href="/#home" eventKey='/#home'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#projects" eventKey="/#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#chart" eventKey="/#chart">Activity Chart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/blog" eventKey="/blog">Blog</Nav.Link>
          </Nav.Item>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  )
}

export default Navbar