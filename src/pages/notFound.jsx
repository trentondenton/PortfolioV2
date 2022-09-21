import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="error-page">
      <div className="error-circle">
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
        <h3>Return <Link to="/">Home</Link>?</h3>
      </div>
    </div>
  )
}

export default NotFound