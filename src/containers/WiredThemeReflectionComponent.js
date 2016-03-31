'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ThemeReflectionComponent from '../components/reflection/ThemeReflectionComponent';

class WiredThemeReflectionComponent extends Component {
  componentDidMount() {
    this.props.actions.startThemeTimer(themeIndex(this.props));
  }

  componentWillReceiveProps(nextProps) {
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
      <ThemeReflectionComponent updateThemeDraftEditor={this.props.actions.updateThemeDraftEditor}
                                theme={getTheme(this.props)}
                                themeIndex={themeIndex(this.props)}
                                nextThemeUrl={nextThemeUrl(this.props)}
                                actions={ this.props.actions } />
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

function nextThemeUrl(props) {
  if (hasNextTheme(props)) {
    return `#/reflect/${themeIndex(props) + 1}`
  }
}

function mapStateToProps(state) {
  return { themes: state.themes.get('items') };
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
