import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import Truncate from "react-truncate";

import { IconChevronRightOutline } from '../components/icons';

const BlogItem = props => {
  const {
    id,
    blog_status,
    content,
    title,
    featured_image_url
  } = props.blogItem;

  return (
    <div>
      <Link to={`/b/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div className="elipses-style">
        <Truncate
          lines={4}
          ellipsis={
            <span>
              ... <Link to={`/b/${id}`}><IconChevronRightOutline /></Link>
            </span>
          }
        >
          {striptags(content)}
        </Truncate>
      </div>
    </div>
  );
};

export default BlogItem;