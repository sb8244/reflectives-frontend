'use strict';

import React from 'react';
import moment from 'moment';
import Immutable from 'immutable';
import DateSelectionForm from '../DateSelectionForm';
import { REMIND_AT_SUBMITTING, REMIND_AT_SUCCESS } from '../../reducers/remindAt';

require('styles/reflection/Finish.scss');

let FinishComponent = (props) => (
  <div className='row align-center'>
    <div className='medium-10 large-10 columns reflection-finish--wrapper'>
      <div className='text-center'>
        <i className='fa fa-thumbs-o-up' />

        <div className='row text-left mt30'>
          <div className='small-7'>
            <p className='lead'>
              Great Job! This reflection has been stashed away so that you can access it in the future.
            </p>

            <p>
              You can have your reflection emailed to you within the next 7 days. This
              can be useful to remind you of your thoughts and keep momentum with your goals.
            </p>
          </div>

          <div className='small-4 small-offset-1'>
            <DateSelectionForm dates={next7Days()}
                               buttonText={dateSelectionText(props)}
                               onDateSelected={dateSelected(props)}
                               disableSubmit={dateSelectionDisabled(props)} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

function dateSelectionText(props) {
  if (props.remindAt.get(props.submissionId) === REMIND_AT_SUBMITTING) {
    return 'Submitting...';
  } else if (props.remindAt.get(props.submissionId) === REMIND_AT_SUCCESS) {
    return 'Good to go!';
  } else {
    return 'Remind me then!';
  }
}

function dateSelectionDisabled(props) {
  return props.remindAt.get(props.submissionId) === REMIND_AT_SUBMITTING || props.remindAt.get(props.submissionId) === REMIND_AT_SUCCESS;
}

function next7Days() {
  let dates = Immutable.Range(1, 8).map(days => moment().add(days, 'days'));
  let week = moment().format('W');

  return dates.map((time, index) => {
    let morning = time.clone().hour(8).minutes(30).seconds(0);
    let inNextWeek = week !== morning.format('W');
    let prefix = inNextWeek ? 'Next ' : '';
    let display = index === 0 ? 'Tomorrow (8:30 AM)' : prefix + morning.format('dddd (h:mm A)');

    return {
      time: morning.unix(),
      display: display
    };
  }).toArray();
}

function dateSelected(props) {
  return function(timestamp) {
    props.actions.remindAt(props.submissionId, timestamp);
  }
}

FinishComponent.displayName = 'ReflectionFinishComponent';

export default FinishComponent;
