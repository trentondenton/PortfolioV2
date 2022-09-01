import React from 'react';
import moment from 'moment';


import profPic from '../assets/images/profpic.jpg';

export default function Home() {
  let day = moment().format('dddd');
  return (
    <div className='home-page'>
      <div className='portfolio-pic'>
        <div className="image-circle">
          <img src={profPic} alt="profilePicture"></img>
        </div>
      </div>
      <div className="home-container">
        <div className="text-container">
          <h1>👋 Hello, my name is Trenton.
            I am a full-stack software developer from rural Kansas. I've
            worked as an instructor teaching new developers
            Python, Flask, JavaScript, ReactJS, MongoDB, SQL
            and more! I also work for a non-profit organization
            called devconnect which helps developers
            find mentors, learn innovative technologies, and find employment opportunities.
          </h1>
          <h1>
            I have an AAS in Information Technology and a BS
            in Computer Information Systems. I provide freelance tech services to local
            businesses. I also have 9 energetic canines. I spend a lot
            of my free time with them. Working remotely has significantly
            improved my life.
          </h1>
        </div>
      </div>
    </div >
  )
}