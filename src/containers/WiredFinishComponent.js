'use strict';

import React from 'react';
import FinishComponent from '../components/reflection/FinishComponent';
import { connect } from 'react-redux';

let WiredFinishComponent = (props) => {
  return (
    <FinishComponent {...props} />
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(WiredFinishComponent);
