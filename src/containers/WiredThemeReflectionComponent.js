'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ThemeReflectionComponent from '../components/reflection/ThemeReflectionComponent';

let WiredThemeReflectionComponent = (props) => {
  return (
    <ThemeReflectionComponent {...props} />
  );
};

function mapStateToProps(state) {
  return { themes: state.themes.get('items') };
}

export default connect(mapStateToProps)(WiredThemeReflectionComponent);
