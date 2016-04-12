'use strict';

import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent';

let WiredLoginComponent = (props) => {
  return (
    <LoginComponent {...props} />
  );
};

function mapStateToProps(state) {
  const props = { auth: state.auth };
  return props;
}

export default connect(mapStateToProps)(WiredLoginComponent);
