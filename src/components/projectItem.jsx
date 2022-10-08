import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';

export default class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { id, name, logo_url, url, description } = this.props.item;
    return (
      <Card style={{ height: '20rem', width: '18rem', margin: '20px', borderRadius: '7px', color: 'white' }} bg="secondary" variant="dark" className="myflex">
        <Card.Img className="project-pic" variant="top" alt={id} src={logo_url} />
        <Card.Body>
          <Card.Title className="myflex">
            {name}
          </Card.Title>
          <Card.Text style={{ height: '3rem', width: '16rem' }} className="myflex">
            {description}
          </Card.Text>
          <Button className="myflex" variant="primary" href={url} target="_blank">Visit Site</Button>
        </Card.Body>
      </Card>
    );
  }
}