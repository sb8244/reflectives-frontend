'use strict';

import React from 'react';
import DraftReflectionComponent from './DraftReflectionComponent';

let ThemeReflectionComponent = (props) => {
  return (
    <div className='row align-center'>
      <div className='medium-10 large-10 columns theme-reflection--wrapper'>
        <DraftReflectionComponent theme={getTheme(props)} />
      </div>
    </div>
  )
}

function getTheme(props) {
  let index = props.themeId || 0;
  return props.themes.get(index);
}

ThemeReflectionComponent.displayName = 'ReflectionThemeReflectionComponent';

export default ThemeReflectionComponent;
