import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';

import profPic from '../assets/images/profpic2.jpg';

export default function Home() {
  return (
    <Container>
      <Row className="myflex">
        <Image src={profPic} roundedCircle alt="portfolio-picture" className="portfolio-pic" data-aos="fade-up" />
      </Row>
      <Row className="myflex dark-container">
        <Container className="text-container">
          <h1>Hello, my name is Trenton.
            I am a full-stack software developer from rural Kansas. I've
            worked as an Instructor of Full Stack Development. I also work
            for a non-profit organization called devconnect.
          </h1>
          <br />
          <h1>
            I have an AAS in IT and a BS in Computer Information Systems is anticipated in May of 2023.
            When I'm not educating myself or others you'll find me outdoors.
          </h1>
        </Container>
      </Row>
    </Container >
  )
}
