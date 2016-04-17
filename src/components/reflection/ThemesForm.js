'use strict';

import React, { PropTypes } from 'react';

require('styles/reflection/ThemesForm.scss');

import ThemesInputComponent from './ThemesInputComponent';
import ThemesList from './ThemesList';

let ThemesForm = (props) => (
  <div>
    <p className="reflection--intro-text">
      You will be guided through a reflection process. Identify your reflection
      themes first, then reflect on each theme individually in a free-form thought process. There is no
      limit to how much or little you can reflect on a theme, but a 90 second timer will activate per theme.
    </p>

    <h2 className="reflection--header">What themes from the last week do you want to reflect on?</h2>

    <ThemesInputComponent />
    <ThemesList themes={props.themes.get('items')} removeTheme={props.actions.removeTheme} />

    <div className="reflection-themes--button-wrapper">
      <a className="secondary hollow button large" disabled={!hasTheme(props)} href="#/reflect">
        { hasTheme(props) ? 'Start Reflection' : 'Enter Themes to Begin Reflection' }
      </a>
    </div>
  </div>
);

ThemesForm.displayName = 'ThemesForm';
ThemesForm.propTypes = {
  themes: PropTypes.object.isRequired
};

function hasTheme(props) {
  return props.themes.get('items').count() > 0;
}

export default ThemesForm;
