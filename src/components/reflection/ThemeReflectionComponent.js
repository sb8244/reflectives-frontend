'use strict';

import React, { PropTypes } from 'react';
import DraftReflectionComponent from './DraftReflectionComponent';
import CircleProgressComponent from '../CircleProgressComponent';
import { THEME_SUBMITTING_SUCCESS } from '../../reducers/themes';

require('styles/reflection/ThemeReflection.scss');

const NUMBER_OF_CIRCLES = 4;
const TOTAL_SECONDS = 90;
const SECONDS_PER_CIRCLE = TOTAL_SECONDS / (NUMBER_OF_CIRCLES - 1);

let ThemeReflectionComponent = (props) => {
  return (
    <div className='row align-center'>
      <div className='medium-10 large-10 columns theme-reflection--wrapper'>
        <div className='theme-reflection--header'>
          <CircleProgressComponent count={completedCount(props)}
                                   max={NUMBER_OF_CIRCLES}
                                   topOffset={10}
                                   partialTooltip='Try to make it to 90 seconds!'
                                   fullTooltip='Nice, you made it to 90 seconds!' />

          <h2>Reflect on { props.theme.get('name') }</h2>
        </div>

        <DraftReflectionComponent theme={ props.theme.get('name') }
                                  contentState={ props.theme.get('contentState') }
                                  onChange={updateThemeDraftEditor(props)} />

        <div className='reflection-themes--button-wrapper'>
          { previousButton(props.previousThemeUrl) }
          { actionButton(props.nextThemeUrl, props) }
          <small className='reflection-themes--important-snippets'
                 data-tip='These snippets will be highlighted in your reminder email.'
                 data-offset={JSON.stringify({ top: '-7px', right: '50%' })}>
            { props.theme.get('importantCount') || 0 } important snippets.
          </small>
        </div>
      </div>
    </div>
  )
}

function updateThemeDraftEditor(props) {
  return function({ raw, styled, underlined }) {
    props.actions.updateThemeDraftEditor(props.themeIndex, raw, styled, underlined);
  }
}

function completedCount(props) {
  let seconds = props.theme.get('secondsOfWriting') || 0;
  return Math.min(Math.floor(seconds/SECONDS_PER_CIRCLE) + 1, NUMBER_OF_CIRCLES);
}

function previousButton(previousThemeUrl) {
  if (previousThemeUrl) {
    return (
      <a className='secondary hollow button large no-mb mr15' href={previousThemeUrl}>
        Back
      </a>
    );
  }
}

function actionButton(nextThemeUrl, props) {
  if (nextThemeUrl) {
    return (
      <a className='secondary hollow button large no-mb' href={nextThemeUrl}>
        Next Topic
      </a>
    );
  } else if(props.submittingTheme === false) {
    return (
      <button className='secondary hollow button large no-mb' onClick={persistReflection(props.actions.endThemeTimer, props.actions.persistReflection, props)}>
        Finish
      </button>
    );
  } else {
    let text = 'Submitting...';
    if (props.submittingTheme === THEME_SUBMITTING_SUCCESS) {
      text = 'Successfully Submitted';
    }

    return (
      <button className='secondary hollow button large no-mb' disabled>
        { text }
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
