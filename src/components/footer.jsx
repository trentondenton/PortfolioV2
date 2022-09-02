import React from 'react';
import { FaLinkedin, FaGithub, FaDev, FaCopyright } from 'react-icons/fa';
import moment from 'moment';

export default function Footer() {
  const date = moment().format("YYYY")
  return (
    <div className="footer-container">
      <div className="rights-wrapper">
        <h4><FaCopyright id="cpright" /> Trenton Denton {date}</h4>
      </div>
      <div className="social-wrapper">
        <a href="https://www.linkedin.com/in/trentondenton/"><FaLinkedin /></a>
        <a href="https://github.com/trentondenton"><FaGithub /></a>
        <a href="https://dev.to/trentondenton"><FaDev /></a>
      </div>
    </div>
  )
}
