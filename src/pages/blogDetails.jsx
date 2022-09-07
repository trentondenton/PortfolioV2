import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

export default function BlogDetails() {
  const [blogItem, setBlogItem] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://tdenton.devcamp.space/portfolio/portfolio_blogs/${params.id}`, { withCredentials: true }
      )
      .then(response => {
        setBlogItem(response.data.portfolio_blog);
      })
      .catch(error => {
        console.error(error);
      });
  }, [params]);


  const {
    title,
    content,
  } = blogItem;
  return (
    <div className="blog-details-container">
      <h1>{title}</h1>

      <div className="blog-content-container">
        <div className="blog-content">{ReactHtmlParser(content)}</div>
      </div>
    </div>
  )
}

