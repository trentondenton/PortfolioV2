import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import MyContact from '../assets/downloads/TDD.vcf';
import portfolioPic from '../assets/images/profpic.jpg';

export default class VCard extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <div className="v-card-page">
        <div className="v-card-header">
          <img src={portfolioPic} alt="trenton" data-aos="slide-down" />
        </div>
        <div className="v-card">
          <div className="v-card-title">
            <h1>Trenton Denton</h1>
            <h2>Full Stack Developer</h2>
          </div>

          <div className="v-card-socials">
            <a href="https://www.linkedin.com/in/trentondenton/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>

            <a href="https://www.twitter.com/thetrentond" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>

            <a href="https://www.github.com/trentondenton" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="v-card-contact">
            <a href={MyContact}>
              <div className="v-card-contact-item">
                Add Contact
              </div>
            </a>
            <a href="/">
              <div className="v-card-contact-item">
                Portfolio
              </div>
            </a>
            <a href="https://docs.google.com/document/d/1GkHOWUjJRH78FKXrNpEA0NxR4hEcbmd13JqmVCSAeHo/edit?usp=sharing" rel="noreferrer" target="_blank">
              <div className="v-card-contact-item">
                Student Projects
              </div>
            </a>
            <a href="https://forms.gle/qrRDfhJQ7SHSttLg9" rel="noreferrer" target="_blank">
              <div className="v-card-contact-item">
                Bottega Inqueries
              </div>
            </a>
          </div>
        </div>
      </div >
    )
  }
}