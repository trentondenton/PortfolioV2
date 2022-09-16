import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Contact from './contact';
import Home from './home';
import Chart from './chart';
import Projects from './projects';
import Footer from '../components/footer';

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="main">
      <div id="home">
        <Home id="home" />
      </div>
      <div id="projects" data-aos="slide-right">
        <Projects id="projects" />
      </div>
      <div id="chart" data-aos="slide-left">
        <h1 className="chart-title">Activity Chart</h1>
        <Chart id="chart" />
      </div>
      <div id="contact" data-aos="slide-right">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Main