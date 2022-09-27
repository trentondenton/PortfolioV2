import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { Container, Card } from 'react-bootstrap';

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
    <Container className="myflex" style={{ marginTop: '100px' }}>
      <Card bg="secondary" style={{ maxWidth: '80vw' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          {ReactHtmlParser(content)}
        </Card.Body>
      </Card>
    </Container>
  )
}

