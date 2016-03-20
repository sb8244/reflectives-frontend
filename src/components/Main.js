require('normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderBarComponent from './HeaderBarComponent';
import ReflectionForm from './ReflectionForm';

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.actions.addTheme('Personal health');
    this.props.actions.addTheme('Expanding professional development');
  }

  render() {
    return (
      <div className="app">
        <ReflectionForm themes={this.props.themes} actions={this.props.actions} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
