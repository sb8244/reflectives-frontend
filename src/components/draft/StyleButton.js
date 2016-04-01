import React, { Component } from 'react';

export default class StyleButton extends Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton label';
    var label = this.props.label;

    if (this.props.active) {
      className += ' RichEditor-activeButton primary';
      label = this.props.activeLabel;
    } else {
      className += ' secondary';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {label}
      </span>
    );
  }
}
