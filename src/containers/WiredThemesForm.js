'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ThemesForm from '../components/reflection/ThemesForm';

let WiredThemesForm = (props) => {
  return (
    <ThemesForm {...props} />
  );
};

function mapStateToProps(state) {
  const props = { themes: state.themes };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    removeTheme: require('../actions/themes/removeTheme.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(WiredThemesForm);
