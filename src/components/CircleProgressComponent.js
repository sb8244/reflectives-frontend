'use strict';

import React, { PropTypes } from 'react';
import Immutable from 'immutable';

require('styles/CircleProgress.scss');

let CircleProgressComponent = (props) => (
  <div className='circleprogress-component' data-tip={tooltipText(props)} data-offset={`{"top":${props.topOffset}}`}>
    { renderCircles(props.count, props.max) }
  </div>
);

function tooltipText(props) {
  if (props.count >= props.max) {
    return props.fullTooltip;
  } else {
    return props.partialTooltip;
  }
}

function renderCircles(filled, total) {
  return Immutable.Range(0, total).map(i => {
    let className = i < filled ? 'filled circle' : 'circle';
    return <div key={i} className={className} />;
  });
}

CircleProgressComponent.displayName = 'CircleProgressComponent';

CircleProgressComponent.propTypes = {
  count: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default CircleProgressComponent;
