'use strict';

import React from 'react';
import FinishComponent from '../components/reflection/FinishComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let WiredFinishComponent = (props) => {
  return (
    <FinishComponent {...props} />
  );
};

function mapStateToProps(state) {
  return { submissionId: 1, remindAt: state.remindAt };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    remindAt: require('../actions/remindAt.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(WiredFinishComponent);
