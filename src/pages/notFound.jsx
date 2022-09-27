import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="myflex" bg="secondary">
      <div className="error-circle">
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
        <h3>Return <Link to="/">Home</Link>?</h3>
      </div>
    </Container>
  )
}

export default NotFound