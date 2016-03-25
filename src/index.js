import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';

import { Router, hashHistory } from 'react-router'
import { routeConfig } from './routes.js';

const store = configureStore();

require('normalize.css');
require('styles/App.scss');

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routeConfig} />
  </Provider>,
  document.getElementById('app')
);
