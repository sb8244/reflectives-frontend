require('normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderBarComponent from './HeaderBarComponent';
import ReflectionForm from './ReflectionForm';

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.actions.addTheme("This is a theme");
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="small-1">
            <HeaderBarComponent />
          </div>
          <div className="columns">
            <ReflectionForm themes={this.props.themes} />
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
