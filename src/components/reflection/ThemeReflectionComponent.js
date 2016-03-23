'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';

require('styles/reflection/ThemeReflection.scss');

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
          <ReactQuill value={ this.state.content } theme='snow' onChange={this.onTextChange.bind(this)} />
        </div>
      </div>
    );
  }
}

function getTheme(props) {
  let index = props.themeId || 0;
  return props.themes.get(index);
}

ThemeReflectionComponent.displayName = 'ReflectionThemeReflectionComponent';

function mapStateToProps(state) {
  return { themes: state.themes.get('items') };
}

export default connect(mapStateToProps)(ThemeReflectionComponent);
