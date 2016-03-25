'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ThemeReflectionComponent from '../components/reflection/ThemeReflectionComponent';

class WiredThemeReflectionComponent extends Component {
  componentDidMount() {
    this.props.actions.startThemeTimer(themeIndex(this.props));
  }

  componentWillUnmount() {
    this.props.actions.endThemeTimer(themeIndex(this.props));
  }

  render() {
    return (
      <ThemeReflectionComponent theme={getTheme(this.props)} />
    );
  }
}

function themeIndex(props) {
  return props.themeId || 0;
}

function getTheme(props) {
  return props.themes.get(themeIndex(props)).get('name');
}

function mapStateToProps(state) {
  return { themes: state.themes.get('items') };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    startThemeTimer: require('../actions/themes/startThemeTimer.js'),
    endThemeTimer: require('../actions/themes/endThemeTimer.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(WiredThemeReflectionComponent);
