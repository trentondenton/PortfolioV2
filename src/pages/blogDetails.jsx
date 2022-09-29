import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { Container, Card, Button } from 'react-bootstrap';

export default function BlogDetails() {
  const [blogItem, setBlogItem] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

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
    <Container className="myflex" style={{ marginTop: '100px', flexDirection: 'column' }}>
      <Card bg="secondary" text="primary" style={{ maxWidth: '80vw', marginBottom: '10px' }}>
        <Card.Title className="p-3 m-auto">{title}</Card.Title>
        <Card.Body className="p-3 m-auto" style={{ color: 'white', maxWidth: '80%' }}>
          {ReactHtmlParser(content)}
        </Card.Body>
      </Card>
      <Button onClick={goBack} size="sm" variant="primary" className="m-auto">Back</Button>
    </Container>
  )
}

