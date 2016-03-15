require('normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderBarComponent from './HeaderBarComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <HeaderBarComponent/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
