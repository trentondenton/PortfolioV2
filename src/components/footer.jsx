import React from 'react';
import { FaLinkedin, FaGithub, FaDev, FaCopyright } from 'react-icons/fa';
import { Navbar, Nav, Button } from 'react-bootstrap';
import moment from 'moment';

export default function Footer() {
  const date = moment().format("YYYY")
  return (
    <Navbar position="fixed-bottom" className="myfooter">
      <Nav>
        <h5><FaCopyright id="cpright" /> Trenton Denton {date}</h5>
      </Nav>
      <Nav>
        <Button variant="outline-primary" className="footer-btn" href="https://www.linkedin.com/in/trentondenton/"><FaLinkedin /></Button>
        <Button variant="outline-primary" className="footer-btn" href="https://github.com/trentondenton"><FaGithub /></Button>
        <Button variant="outline-primary" className="footer-btn" href="https://dev.to/trentondenton"><FaDev /></Button>
      </Nav>
    </Navbar>
  )
}
