import React, { useEffect } from 'react';
import Aos from 'aos';

import Contact from './contact';
import Home from './home';
import Chart from './chart';
import Projects from './projects';

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="projects" data-aos="slide-right">
        <Projects />
      </div>
      <div id="chart" data-aos="slide-left">
        <h1 className="myflex myheader">Activity Chart</h1>
        <Chart id="chart" />
      </div>
      <div id="contact" data-aos="slide-right">
        <Contact />
      </div>
    </div>
  )
}

export default Main