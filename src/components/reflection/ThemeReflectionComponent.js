'use strict';

import React from 'react';
import { connect } from 'react-redux';

require('styles/reflection/ThemeReflection.scss');

let ThemeReflectionComponent = (props) => (
  <div className="row align-center">
    <div className="medium-10 large-10 columns">
    
    </div>
  </div>
);

function getTheme(props) {
  let index = props.themeId || 0;
  return props.themes.get(index);
}

ThemeReflectionComponent.displayName = 'ReflectionThemeReflectionComponent';

function mapStateToProps(state) {
  const props = { themes: state.themes.get('items') };
  return props;
}

export default connect(mapStateToProps)(ThemeReflectionComponent);
