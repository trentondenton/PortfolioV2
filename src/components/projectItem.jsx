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
    const { id, description, thumb_image_url, logo_url, url } = this.props.item;
    return (
      <a href={`${url}`} target="_blank" rel="noreferrer">
        <div className="project-item-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div
            className={`project-img-background ${this.state.projectItemClass}`}
            style={{
              backgroundImage: `url("${thumb_image_url}")`
            }}
          />

          <div className="img-text-wrapper">
            <div className="logo-wrapper">
              <img alt={id} src={logo_url} />
            </div>

            <div className="subtitle">{description}</div>
          </div>
        </div>
      </a>
    );
  }
}