require('normalize.css');
require('styles/App.scss');

import React from 'react';
import { Router, browserHistory } from 'react-router'
import { routeConfig } from '../routes.js';

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory} createElement={createElementFn(this.props)} routes={routeConfig} />
    );
  }
}

function createElementFn(parentProps) {
  return function(Component, props) {
    return <Component {...parentProps} {...props} />
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
