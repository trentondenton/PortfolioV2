import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";

import { IconChevronRightOutline } from "../components/icons";
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
    <div>
      <Link to={`/b/${id}`}>
        <h2>{title}</h2>
      </Link>
      <div className="posts-container">
        {truncate(striptags(content), 416)}
        <Link to={`/b/${id}`}><IconChevronRightOutline className="arrow-icon" /></Link>
      </div>
    </div >
  );
};

export default BlogItem;