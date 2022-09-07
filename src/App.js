import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import './styles/main.scss';
import Navbar from './components/navbar';
import Main from './pages/main';
import Blog from './pages/blog';
import BlogDetails from './pages/blogDetails';
import Projects from './pages/projects';
import Contact from './pages/contact';


function App() {
  const params = useParams();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} >
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/b/:id" element={<BlogDetails params={params} />} />
      </Routes>
    </div>
  );
}

export default App;
