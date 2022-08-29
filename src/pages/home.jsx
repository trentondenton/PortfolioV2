import React, { useEffect } from 'react';
import moment from 'moment';
import Chaffle from "chaffle";

import profPic from '../assets/images/profpic.jpg';

export default function Home() {
  let day = moment().format('dddd');

  useEffect(() => {
    const elements = document.querySelectorAll("[data-chaffle]");
    Array.prototype.forEach.call(elements, function (el) {
      const chaffle = new Chaffle(el, {
      });
      el.addEventListener("mouseover", function () {
        chaffle.init();
      });
      return () => {

      }
    })



  });
  return (
    <div className='home-page'>
      <div className='portfolio-pic'>
        <div className="image-circle">
          <img src={profPic} alt="profilePicture"></img>
        </div>
      </div>
      <div className="home-container">
        <div className="text-container">
          <h1>👋 Hello, my name is <span class="green" data-chaffle="en" data-chaffle-speed="1" data-chaffle-delay="100">Trenton</span><span className="transparent">Trenton</span>.
            I am a full-stack software developer from rural <span class="green" data-chaffle="en" data-chaffle-speed="1" data-chaffle-delay="100"> Kansas</span><span className="transparent"> Kansas</span>. I’ve
            worked as an instructor teaching new developers
            Python, Flask, JavaScript, ReactJS, MongoDB, SQL
            and more! I also work for a non-profit organization
            called devconnect which helps developers
            find mentors, learn <span class="green" data-chaffle="en" data-chaffle-speed="1" data-chaffle-delay="100"> innovative </span><span className="transparent"> innovative </span> technologies, and find employment opportunities.
          </h1>
          <h1>
            I have an AAS in Information Technology and a BS
            in Computer Information Systems. I'm an <span class="green" data-chaffle="en" data-chaffle-speed="1" data-chaffle-delay="100">active</span><span className="transparent">active</span> member in my rural community, participating in volunteer programs, events,
            and clean up efforts. I do freelance tech for local
            businesses.
          </h1>
          <h1>
            I also have 9 <span class="green" data-chaffle="en" data-chaffle-speed="1" data-chaffle-delay="100"> energetic </span><span className="transparent"> energetic </span> dogs that like to keep me on my toes and I spend a lot
            of my free time with them. Working remotely has significantly
            improved my life.
          </h1>
          <h1>If you’re interested in talking with me feel free to drop me a line.</h1>

          <h1>
            <span className="green" data-chaffle="en" data-chaffle-speed="1" data-chaffle-delay="20">
              Stay positive &
            </span>
            <br />
            <span className="green" data-chaffle="en" data-chaffle-speed="1" data-chaffle-delay="20">
              Have a great {day}!
            </span>
            <span className="transparent">Trenton</span>
          </h1>
        </div>
      </div>
    </div >
  )
}