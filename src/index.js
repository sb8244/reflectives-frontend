import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';

import { Router, hashHistory } from 'react-router'
import { routeConfig } from './routes.js';
import ReactTooltip from 'react-tooltip';

const store = configureStore();

require('normalize.css');
require('styles/App.scss');

render(
  <div>
    <Provider store={store}>
      <Router history={hashHistory} routes={routeConfig} createElement={createElement} />
    </Provider>

    <ReactTooltip effect="solid" />
  </div>,
  document.getElementById('app')
);

function createElement(Component, props) {
  ReactTooltip.hide();
  ReactTooltip.rebuild();

  return <Component {...props} />
}
