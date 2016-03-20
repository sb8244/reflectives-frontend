'use strict';

import React, { PropTypes } from 'react';

require('styles//ReflectionForm.scss');

import ThemesInputComponent from './reflection/ThemesInputComponent';
import ThemesList from './reflection/ThemesList';

let ReflectionFormComponent = (props) => (
  <div className="row align-center">
    <div className="medium-8 large-6 columns">
      <p className="reflection--intro-text">
        You will be guided through a reflection process. Identify your reflection
        themes first, then reflect on each theme individually in a free-form thought process. There is no
        limit to how much or little you can reflect on a theme, but 90 seconds will be recommended per
        theme.
      </p>

      <h2 className="reflection--header">What themes from the last week do you want to reflect on?</h2>

      <ThemesInputComponent />
      <ThemesList themes={props.themes.items} removeTheme={props.actions.removeTheme} />

      <div className="reflection-themes--button-wrapper">
        <button className="secondary hollow button large" disabled={!hasTheme(props)}>
          { hasTheme(props) ? 'Start Reflection' : 'Enter Theme to Begin Reflection' }
        </button>
      </div>
    </div>
  </div>
);

ReflectionFormComponent.displayName = 'ReflectionFormComponent';
ReflectionFormComponent.propTypes = {
  themes: PropTypes.object.isRequired
};

function hasTheme(props) {
  return props.themes.items.length > 0;
}

export default ReflectionFormComponent;
