require('normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderBarComponent from './HeaderBarComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="small-1">
            <HeaderBarComponent />
          </div>
          <div className="columns">Rest</div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
