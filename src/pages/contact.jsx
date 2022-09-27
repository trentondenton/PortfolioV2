import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';

function Contact() {

  return (
    <Container fluid>
      <Row className="myflex myheader">
        <h1>Contact Me</h1>
      </Row>
      <Row className="dark-container myflex">
        <Form className="myform" style={{ minWidth: "60vw" }} action="https://formsubmit.co/f5fa961f56f9dfc28b413b755d5e6c27" method="POST">
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" role="name" placeholder="Enter Name" />
            <Form.Label>Email</Form.Label>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" role="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control as="textarea" rows={4} type="message" role="message" placeholder="Enter Message" />
          </Form.Group>
          <Button className="myflex" type="submit" onSubmit={() => { }} style={{ margin: '20px' }}>Submit</Button>
        </Form>
      </Row>
    </Container >
  )
}

export default Contact