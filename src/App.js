import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/main.scss';
import Navbar from './components/navbar';
import Main from './pages/main';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
