import React, { Component } from 'react';
import axios from 'axios';
import { Container, Pagination, Spinner } from 'react-bootstrap';
import { ChevronRight, ChevronLeft, ChevronBarRight, ChevronBarLeft } from 'react-bootstrap-icons';

import BlogItem from '../components/blogItem';

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      isLoading: true,
      totalCount: 0,
      totalPages: 0,
      currentPage: 1
    };

    this.getPosts = this.getPosts.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.firstPage = this.firstPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.pageNumberClick = this.pageNumberClick.bind(this);

  }

  componentDidMount() {
    if (this.state.isLoading) {
      this.getPosts();
    } else {
      return;
    }
  }

  nextPage() {
    if (this.state.currentPage < this.state.totalPages) {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, this.getPosts);
    } else {
      return
    }
  }
  previousPage() {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      }, this.getPosts);
    } else {
      return;
    }
  }

  firstPage() {
    this.setState({
      currentPage: 1
    }, this.getPosts);
  }

  lastPage() {
    this.setState({
      currentPage: this.state.totalPages
    }, this.getPosts);
  }

  pageNumberClick(e) {
    this.setState({
      currentPage: parseInt(e.target.innerText)
    }, this.getPosts);
  }

  getPosts() {
    axios.get(`https://tdenton.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, { withCredentials: true })
      .then(res => {
        this.setState({
          posts: res.data.portfolio_blogs,
          totalCount: res.data.meta.total_records,
          totalPages: res.data.meta.total_pages,
          isLoading: false
        });
        console.log(this.state.posts)
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const blogRecords = this.state.posts.map(post => {
      return <BlogItem key={post.id} post={post} />
    });

    const getPages = () => {
      let pages = [];
      for (let i = 1; i <= this.state.totalPages; i++) {
        pages.push(i);
      }

      return pages.map(page => {
        return <Pagination.Item key={page} activeLabel={''} active={page === this.state.currentPage} onClick={this.pageNumberClick}>{page}</Pagination.Item>
      })
    }
    return (
      this.state.isLoading ?
        <Container bg="secondary" className="myflex" style={{ paddingTop: '150px' }}>
          <Spinner animation="border" variant="primary" />
        </Container>
        :
        <Container bg="secondary" fluid style={{ paddingTop: '150px' }}>
          {blogRecords}
          <Pagination className="myflex">
            <Pagination.First onClick={this.firstPage}><ChevronBarLeft /></Pagination.First>
            <Pagination.Prev onClick={this.previousPage}><ChevronLeft /></Pagination.Prev>
            {getPages()}
            <Pagination.Next onClick={this.nextPage}><ChevronRight /></Pagination.Next>
            <Pagination.Last onClick={this.lastPage}><ChevronBarRight /></Pagination.Last>
          </Pagination>
        </Container>
    );
  }
}
