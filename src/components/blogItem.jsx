import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import { Card, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

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

  let stripped_content = striptags(content);
  let parsed_content = ReactHtmlParser(stripped_content);

  return (
    <Row className="myflex">
      <Card bg="secondary" text="primary" style={{ maxWidth: '80vw', marginBottom: '15px' }}>
        <Card.Title className="pl-3 mt-3"><Link to={`/b/${id}`}>{title}</Link></Card.Title>
        <Card.Body>
          <Card.Text style={{ color: 'white' }}>
            {truncate(parsed_content, 200)}
          </Card.Text>
          <Link to={`/b/${id}`}><ChevronBarRight className="arrow-icon" />Read More</Link>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default BlogItem;