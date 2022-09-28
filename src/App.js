import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import './styles/main.scss';
import Navbar from './components/navbar';
import Main from './pages/main';
import Blog from './pages/blog';
import BlogDetails from './pages/blogDetails';
import VCard from './pages/vcard';
import NotFound from './pages/notFound';


function App() {
  const params = useParams();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/b/:id" element={<BlogDetails params={params} />} />
        <Route path="/vcard" element={<VCard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
