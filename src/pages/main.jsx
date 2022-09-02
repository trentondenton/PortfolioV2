import React from 'react';

import Contact from './contact';
import Home from './home';
import Projects from './projects';
import Footer from '../components/footer';

function Main() {
  return (
    <div>
      <div id="home">
        <Home id="home" />
      </div>
      <div id="projects">
        <Projects id="projects" />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Main