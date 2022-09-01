import React, { Component } from "react";

export default class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectItemClass: ""
    }
  }

  handleMouseEnter() {
    this.setState({ projectItemClass: "image-blur" });

  }

  handleMouseLeave() {
    this.setState({ projectItemClass: "" });
  }
  render() {
    const { id, name, logo_url, url } = this.props.item;
    return (
      <div className="project-card">
        <div className="logo-wrapper">
          <a href={`${url}`} target="_blank" rel="noreferrer">
            <img alt={id} src={logo_url} />
          </a>
        </div>
        <div className="project-title">
          <a href={`${url}`} target="_blank" rel="noreferrer">
            <h3>{name}</h3>
          </a>
        </div>
      </div>
    );
  }
}