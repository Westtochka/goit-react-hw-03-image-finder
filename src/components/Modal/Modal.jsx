import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdpropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div onClick={this.handleBackdpropClick}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;

// Modal.propTypes = {
//   url: PropTypes.string,
//   alt: PropTypes.string,
//   handleBackdpropClick: PropTypes.func,
// };

