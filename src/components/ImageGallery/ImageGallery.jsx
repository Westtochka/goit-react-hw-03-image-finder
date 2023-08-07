import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}