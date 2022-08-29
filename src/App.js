import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/main.scss';
import Navbar from './components/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
