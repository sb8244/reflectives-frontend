'use strict';

import React, { PropTypes } from 'react';

let ThemesList = (props) => (
  <ul className="reflection-themes--list unstyled">
    { props.themes.map((item, index) => mapTheme(item, index, props.removeTheme)) }
  </ul>
);

function mapTheme(theme, index, removeFn) {
  return (
    <li className="reflection-themes--item" key={index}>
      { theme }
      <span className="reflection-themes--item-close" onClick={() => removeFn(index)}>&times;</span>
    </li>
  );
}

ThemesList.displayName = 'ReflectionThemesList';

ThemesList.propTypes = {
  themes: PropTypes.object.isRequired
};

export default ThemesList;
