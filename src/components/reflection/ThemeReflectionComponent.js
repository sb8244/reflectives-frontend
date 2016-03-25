'use strict';

import React, { Component } from 'react';
import ReactQuill from 'react-quill';

require('styles/reflection/ThemeReflection.scss');

const STYLES = {
  '.ql-editor': {
    'font-family': '"Arial", san-serif',
    'font-size': '18px'
  },
  '.ql-editor a': {
    'text-decoration': 'none'
  }
};

class ThemeReflectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  onTextChange(value) {
    this.setState({ content: value });
  }

  render() {
    return (
      <div className='row align-center'>
        <div className='medium-10 large-10 columns theme-reflection--wrapper'>
          <ReactQuill value={ this.state.content } theme='snow' onChange={this.onTextChange.bind(this)} styles={STYLES} />
        </div>
      </div>
    );
  }
}

// function getTheme(props) {
//   let index = props.themeId || 0;
//   return props.themes.get(index);
// }

ThemeReflectionComponent.displayName = 'ReflectionThemeReflectionComponent';

export default ThemeReflectionComponent;
