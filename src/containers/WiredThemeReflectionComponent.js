'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ThemeReflectionComponent from '../components/reflection/ThemeReflectionComponent';

class WiredThemeReflectionComponent extends Component {
  componentWillMount() {
    if (getTheme(this.props) === undefined) {
      window.location.href = '/';
    }
  }

  componentDidMount() {
    this.props.actions.startThemeTimer(themeIndex(this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (getTheme(nextProps) === undefined) {
      window.location.href = '/';
    }

    if (themeIndex(this.props) !== themeIndex(nextProps)) {
      this.props.actions.endThemeTimer(themeIndex(this.props));
      this.props.actions.startThemeTimer(themeIndex(nextProps));
    }
  }

  componentWillUnmount() {
    this.props.actions.endThemeTimer(themeIndex(this.props));
  }

  render() {
    return (
      <ThemeReflectionComponent theme={getTheme(this.props)}
                                submittingTheme={this.props.submittingTheme}
                                themeIndex={themeIndex(this.props)}
                                nextThemeUrl={nextThemeUrl(this.props)}
                                previousThemeUrl={previousThemeUrl(this.props)}
                                actions={ this.props.actions }
                                messages={ this.props.messages } />
    );
  }
}

function themeIndex(props) {
  return parseInt(props.params.themeId || 0);
}

function getTheme(props) {
  return props.themes.get(themeIndex(props));
}

function hasNextTheme(props) {
  return themeIndex(props) + 1 < props.themes.count();
}

function hasPreviousTheme(props) {
  return themeIndex(props) > 0;
}

function nextThemeUrl(props) {
  if (hasNextTheme(props)) {
    return `#/reflect/${themeIndex(props) + 1}`
  }
}

function previousThemeUrl(props) {
  if (hasPreviousTheme(props)) {
    return `#/reflect/${themeIndex(props) - 1}`
  } else {
    return '#/'
  }
}

function mapStateToProps(state) {
  return { submittingTheme: state.themes.get('submitting'), themes: state.themes.get('items'), messages: state.messages };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    startThemeTimer: require('../actions/themes/startThemeTimer.js'),
    endThemeTimer: require('../actions/themes/endThemeTimer.js'),
    updateThemeDraftEditor: require('../actions/themes/updateThemeDraftEditor.js'),
    persistReflection: require('../actions/themes/persistReflection.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(WiredThemeReflectionComponent);
