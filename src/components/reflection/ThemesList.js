'use strict';

import React, { PropTypes } from 'react';

let ThemesList = (props) => (
  <ul className="reflection-themes--list">
    { props.themes.map((item, index) => mapTheme(item, index)) }
  </ul>
);

function mapTheme(theme, index) {
  return (
    <li className="reflection-themes--item" key={index}>
      { theme }
      <span className="reflection-themes--item-close">&times;</span>
    </li>
  );
}

ThemesList.displayName = 'ReflectionThemesList';

ThemesList.propTypes = {
  themes: PropTypes.array.isRequired
};

export default ThemesList;
