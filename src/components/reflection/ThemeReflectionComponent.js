'use strict';

import React from 'react';
import DraftReflectionComponent from './DraftReflectionComponent';

let ThemeReflectionComponent = (props) => {
  return (
    <div className='row align-center'>
      <div className='medium-10 large-10 columns theme-reflection--wrapper'>
        <DraftReflectionComponent theme={props.theme} />
      </div>
    </div>
  )
}

ThemeReflectionComponent.displayName = 'ReflectionThemeReflectionComponent';

export default ThemeReflectionComponent;
