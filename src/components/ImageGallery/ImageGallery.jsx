import React, { Component } from 'react';
import styles from './ImageGallery.module.css'


export class ImageGallery extends Component {
  render() {
    return <ul className={styles.imageGallery}>{this.props.children}</ul>;
  }
}