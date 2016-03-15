'use strict';

import React, { PropTypes } from 'react';

require('styles//ReflectionForm.scss');

import ThemesInputComponent from './reflection/ThemesInputComponent';
import ThemesList from './reflection/ThemesList';

let ReflectionFormComponent = (props) => (
  <div className="reflection--wrapper">
    <div>
      <h2 className="reflection--header">What themes from the last week do you want to reflect on?</h2>
      <ThemesInputComponent />
      <ThemesList themes={props.themes.items} />
    </div>
  </div>
);

ReflectionFormComponent.displayName = 'ReflectionFormComponent';

// Uncomment properties you need
ReflectionFormComponent.propTypes = {
  themes: PropTypes.object.isRequired
};
// ReflectionFormComponent.defaultProps = {};

export default ReflectionFormComponent;
