'use strict';

import React from 'react';

require('styles/reflection/ThemesInput.scss');

let ThemesInputComponent = () => (
  <div className="reflection-themes--form">
    <input type="text" placeholder="Personal health, Professional goals, Event from the week?" />
  </div>
);

ThemesInputComponent.displayName = 'ReflectionThemesInputComponent';

// Uncomment properties you need
// ThemesInputComponent.propTypes = {};
// ThemesInputComponent.defaultProps = {};

export default ThemesInputComponent;
