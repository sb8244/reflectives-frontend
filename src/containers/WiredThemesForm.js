'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ThemesForm from '../components/reflection/ThemesForm';
import PreviousReflections from '../components/reflection/PreviousReflections';

let WiredThemesForm = (props) => {
  return (
    <div className="row align-center">
      <div className="medium-8 large-6 columns">
        <ThemesForm {...props} />
        { previousReflections(props) }
      </div>
    </div>
  );
};

function previousReflections(props) {
  if (props.reflectionCollections.length > 0) {
    return <PreviousReflections {...props} />;
  }
}

function mapStateToProps(state) {
  const props = { themes: state.themes, reflectionCollections: state.reflectionCollections.get('records').toJS(), kvs: state.kvs };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    removeTheme: require('../actions/themes/removeTheme.js'),
    setKvp: require('../actions/setKvp.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(WiredThemesForm);
