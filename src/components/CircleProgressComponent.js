'use strict';

import React, { PropTypes } from 'react';
import Immutable from 'immutable';

require('styles/CircleProgress.scss');

let CircleProgressComponent = (props) => (
  <div className='circleprogress-component'>
    { renderCircles(props.count, props.max) }
  </div>
);

function renderCircles(filled, total) {
  return Immutable.Range(0, total).map(i => {
    let className = i < filled ? 'filled circle' : 'circle';
    return <div className={className} />;
  });
}

CircleProgressComponent.displayName = 'CircleProgressComponent';

CircleProgressComponent.propTypes = {
  count: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default CircleProgressComponent;
