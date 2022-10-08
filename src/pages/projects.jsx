import React, { Component } from "react";
import axios from 'axios';
import { Spinner, Container, Row } from "react-bootstrap";

import ProjectItem from "../components/projectItem";


export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: []
    };
    this.getProjectItems = this.getProjectItems.bind(this);
  }

  getProjectItems() {
    axios
      .get("https://tdenton.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return (<ProjectItem key={item.id} item={item} />);
    });
  }

  componentDidMount() {
    this.getProjectItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div> Loading...</div>;
    }


    return (
      this.state.isLoading ?
        <Spinner animation="border" />
        :
        <Container fluid>
          <Row className="myflex myheader">
            <h1>Projects</h1>
          </Row>
          <Row className="myflex">
            {this.portfolioItems()}
          </Row>
        </Container>
    )
  }
}