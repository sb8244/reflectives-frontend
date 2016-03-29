'use strict';

import React from 'react';

require('styles/reflection/Finish.scss');

let FinishComponent = () => (
  <div className='row align-center'>
    <div className='medium-10 large-10 columns reflection-finish--wrapper'>
      <div className="text-center">
        <i className="fa fa-thumbs-o-up" />
        <p className="lead">
          Great Job! This reflection will be stashed away so that you can access it in the future.
        </p>
      </div>
    </div>
  </div>
);

FinishComponent.displayName = 'ReflectionFinishComponent';

export default FinishComponent;
