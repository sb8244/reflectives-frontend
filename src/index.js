import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';

import { Router, hashHistory } from 'react-router'
import { routeConfig } from './routes.js';
import ReactTooltip from 'react-tooltip';

import loadReflectionCollections from './actions/reflectionCollections/load';

const store = configureStore();

require('normalize.css');
require('font-awesome/css/font-awesome.css');
require('styles/App.scss');

store.dispatch(loadReflectionCollections());

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
