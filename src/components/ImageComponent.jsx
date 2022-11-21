import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.source}
          alt={this.props.info}
          className="responsive-image"
        />
      </div>
    );
  }
}

export default ImageComponent;
