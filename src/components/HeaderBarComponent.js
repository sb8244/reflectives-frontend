'use strict';

import React from 'react';

require('styles/HeaderBar.scss');

let HeaderBarComponent = () => (
  <div className="header--wrapper">
    <img className="header--logo" src={require('../images/logo.png')} />
  </div>
);

HeaderBarComponent.displayName = 'HeaderBarComponent';

export default HeaderBarComponent;
