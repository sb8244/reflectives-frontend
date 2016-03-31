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
        <div className="theme-reflection--header">
          <CircleProgressComponent count={completedCount(props)}
                                   max={NUMBER_OF_CIRCLES}
                                   topOffset={10}
                                   partialTooltip="Try to make it to 90 seconds!"
                                   fullTooltip="Nice, you made it to 90 seconds!" />

          <h2>Reflect on { props.theme.get('name') }</h2>
        </div>

        <DraftReflectionComponent theme={ props.theme.get('name') }
                                  contentState={ props.theme.get('contentState') }
                                  onChange={updateThemeDraftEditor(props)} />

        <div className="reflection-themes--button-wrapper">
          { actionButton(props.nextThemeUrl, props) }
        </div>
      </div>
    </div>
  )
}

function updateThemeDraftEditor(props) {
  return function({ raw, styled }) {
    props.actions.updateThemeDraftEditor(props.themeIndex, raw, styled);
  }
}

function completedCount(props) {
  let seconds = props.theme.get('secondsOfWriting') || 0;
  return Math.min(Math.floor(seconds/SECONDS_PER_CIRCLE) + 1, NUMBER_OF_CIRCLES);
}

function actionButton(nextThemeUrl, props) {
  if (nextThemeUrl) {
    return (
      <a className="secondary hollow button large no-mb" href={nextThemeUrl}>
        Next Topic
      </a>
    );
  } else {
    return (
      <button className="secondary hollow button large no-mb" onClick={persistReflection(props.actions.endThemeTimer, props.actions.persistReflection, props)}>
        Finish
      </button>
    );
  }
}

function persistReflection(endThemeTimer, action, { themeIndex }) {
  return function() {
    endThemeTimer(themeIndex);
    action();
  };
}

ThemeReflectionComponent.displayName = 'ReflectionThemeReflectionComponent';
ThemeReflectionComponent.propTypes = {
  theme: PropTypes.object.isRequired,
  nextThemeUrl: PropTypes.string
};

export default ThemeReflectionComponent;
