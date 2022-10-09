import React, { Component } from 'react';
import {Container, Row, Button, Card} from 'react-bootstrap';
import Aos from 'aos';

import MyContact from '../assets/downloads/TDD.vcf';
import portfolioPic from '../assets/images/profpic2.jpg';

export default class VCard extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <Container fluid className="v-card-page">
          <Card.Img variant="top" src={portfolioPic} alt="trenton" className="v-card-image" data-aos="fade-up" />
        <Card className="v-card">
          <Card.Title className="v-card-title">
            Trenton Denton
          </Card.Title>
          <Card.Subtitle className="v-card-subtitle">
            Software Engineer
          </Card.Subtitle>
          <Card.Body>
            <Row className="myflex">
              <Card.Link href="https://www.linkedin.com/in/trentondenton/" target="_blank">
                <Button variant="secondary"><i className="fab fa-linkedin-in" /></Button>
              </Card.Link>

              <Card.Link href="https://www.twitter.com/thetrentond" target="_blank">
                <Button variant="secondary"><i className="fab fa-twitter" /></Button>
              </Card.Link>

              <Card.Link href="https://www.github.com/trentondenton" target="_blank">
                <Button variant="secondary"><i className="fab fa-github" /></Button>
              </Card.Link>
            </Row>
            <br/>
              <Row className='myflex'>
                <Button className="v-card-btn" href={MyContact}>
                  Add Contact
                </Button>
              </Row>
              <Row className='myflex'>
                <Button className="v-card-btn" href="/">
                  Portfolio
                </Button>
              </Row>
              <Row className='myflex'>
                <Button className="v-card-btn" href="https://docs.google.com/document/d/1GkHOWUjJRH78FKXrNpEA0NxR4hEcbmd13JqmVCSAeHo/edit?usp=sharing" target="_blank">
                  Student Projects
                </Button>
              </Row>
              <Row className='myflex'>
                <Button className="v-card-btn" href="https://forms.gle/qrRDfhJQ7SHSttLg9" target="_blank">
                  Bottega Inqueries
                </Button>
              </Row>
          </Card.Body>
        </Card>
      </Container >
    )
  }
}