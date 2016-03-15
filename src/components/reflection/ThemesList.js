'use strict';

import React, { PropTypes } from 'react';

let ThemesList = (props) => (
  <div>
    { props.themes.map((item, index) => mapTheme(item, index)) }
  </div>
);

function mapTheme(theme, index) {
  return (
    <div key={index}>{theme}</div>
  );
}

ThemesList.displayName = 'ReflectionThemesList';

ThemesList.propTypes = {
  themes: PropTypes.array.isRequired
};

export default ThemesList;
