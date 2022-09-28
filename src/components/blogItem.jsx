import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import { Card, Row } from 'react-bootstrap';

import { ChevronBarRight } from "react-bootstrap-icons";
const BlogItem = props => {

  const {
    id,
    content,
    title,
  } = props.post;

  const truncate = (str, n) => {
    return str.length >= n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <Row className="myflex" style={{ paddingTop: '100px' }}>
      <Card bg="secondary" text="primary" style={{ maxWidth: '80vw' }}>
        <Card.Title className="p-3"><Link to={`/b/${id}`}>{title}</Link></Card.Title>
        <Card.Body>
          <Card.Text className="p-3" style={{ color: 'white' }}>
            {truncate(striptags(content), 416)}
          </Card.Text>
          <Link to={`/b/${id}`}><ChevronBarRight className="arrow-icon" />Read More</Link>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default BlogItem;