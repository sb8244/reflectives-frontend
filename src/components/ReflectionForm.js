'use strict';

import React, { PropTypes } from 'react';

require('styles//ReflectionForm.scss');

import ThemesInputComponent from './reflection/ThemesInputComponent';

let ReflectionFormComponent = (props) => (
  <div className="reflection--wrapper">
    <ThemesInputComponent />
    { props.themes.items.map(item => {
      return (
        <div>{item}</div>
      )
    }) }
  </div>
);

ReflectionFormComponent.displayName = 'ReflectionFormComponent';

// Uncomment properties you need
ReflectionFormComponent.propTypes = {
  themes: PropTypes.object.isRequired
};
// ReflectionFormComponent.defaultProps = {};

export default ReflectionFormComponent;
