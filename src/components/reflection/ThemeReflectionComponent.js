'use strict';

import React, { PropTypes } from 'react';
import DraftReflectionComponent from './DraftReflectionComponent';
import CircleProgressComponent from '../CircleProgressComponent';

require('styles/reflection/ThemeReflection.scss');

const NUMBER_OF_CIRCLES = 4;
const SECONDS_PER_CIRCLE = 3;

let ThemeReflectionComponent = (props) => {
  return (
    <div className='row align-center'>
      <div className='medium-10 large-10 columns theme-reflection--wrapper'>
        <DraftReflectionComponent theme={ props.theme.get('name') } />

        <div className="reflection-themes--button-wrapper">
          <CircleProgressComponent count={completedCount(props)} max={NUMBER_OF_CIRCLES} />

          { actionButton(props.nextThemeUrl) }
        </div>
      </div>
    </div>
  )
}

function completedCount(props) {
  let seconds = props.theme.get('secondsOfWriting') || 0;
  return Math.min(Math.floor(seconds/SECONDS_PER_CIRCLE) + 1, NUMBER_OF_CIRCLES);
}

function actionButton(nextThemeUrl) {
  if (nextThemeUrl) {
    return (
      <a className="secondary hollow button large no-mb" href={nextThemeUrl}>
        Next Topic
      </a>
    );
  } else {
    return (
      <a className="secondary hollow button large no-mb">
        Finish
      </a>
    );
  }
}

ThemeReflectionComponent.displayName = 'ReflectionThemeReflectionComponent';
ThemeReflectionComponent.propTypes = {
  theme: PropTypes.object.isRequired,
  nextThemeUrl: PropTypes.string
};

export default ThemeReflectionComponent;
