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
        <p className='lead'>
          Great Job! This reflection has been stashed away so that you can access it in the future.
        </p>

        <p>
          You can have your reflection emailed to you within the next 7 days. This
          can be useful to remind you of your thoughts and keep momentum with your goals.
        </p>

        <DateSelectionForm dates={next7Days()} />
      </div>
    </div>
  </div>
);

function next7Days() {
  let dates = Immutable.Range(1, 8).map(days => moment().add(days, 'days'));
  return dates.map(time => {
    let morning = time.clone().hour(8).minutes(30).seconds(0);

    return {
      time: morning.unix(),
      display: 'Next ' + morning.format('dddd (h:mm A)')
    };
  }).toArray();
}

FinishComponent.displayName = 'ReflectionFinishComponent';

export default FinishComponent;
