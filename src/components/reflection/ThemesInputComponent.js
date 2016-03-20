'use strict';

import React from 'react';

require('styles/reflection/ThemesInput.scss');

let ThemesInputComponent = (props) => (
  <div className="theme--input">
    { JSON.stringify(props) }
  </div>
);

ThemesInputComponent.displayName = 'ReflectionThemesInputComponent';

// Uncomment properties you need
// ThemesInputComponent.propTypes = {};
// ThemesInputComponent.defaultProps = {};

export default ThemesInputComponent;