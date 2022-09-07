import React, { Component } from 'react';
import axios from 'axios';

import BlogItem from '../components/blogItem';

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      loading: true,
      totalCount: 0,
    };
    this.getPosts = this.getPosts.bind(this);

  }

  componentDidMount() {
    if (this.state.loading) {
      this.getPosts();
    } else {
      return;
    }
  }

  getPosts() {
    axios.get(`https://tdenton.devcamp.space/portfolio/portfolio_blogs`, { withCredentials: true })
      .then(res => {
        this.setState({
          posts: res.data.portfolio_blogs,
          totalCount: res.data.meta.total_records,
          loading: false
        });
        console.log(this.state.posts)
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const blogRecords = this.state.posts.map(post => {
      return <BlogItem key={post.id} post={post} />
    });
    return (
      <div className="blog-container">
        <div className="blog-stuff">
          {blogRecords}
        </div>
      </div>
    );
  }
}
