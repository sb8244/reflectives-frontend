'use strict';

import React from 'react';
import moment from 'moment';
import Immutable from 'immutable';
import DateSelectionForm from '../DateSelectionForm';

require('styles/reflection/Finish.scss');

let FinishComponent = () => (
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
            <DateSelectionForm dates={next7Days()} buttonText="Remind me then!" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

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

FinishComponent.displayName = 'ReflectionFinishComponent';

export default FinishComponent;
