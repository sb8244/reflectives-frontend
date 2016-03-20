'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';
import addTheme from '../../actions/themes/addTheme';
import {reset} from 'redux-form';

require('styles/reflection/ThemesInput.scss');

function addThemeSubmit(values, dispatch) {
  dispatch(addTheme(values.theme));
  dispatch(reset('addTheme'));
}

let ThemesInputComponent = (props) => (
  <form className="reflection-themes--form" onSubmit={props.handleSubmit(addThemeSubmit)}>
    <input type="text" required placeholder="Personal health, Professional goals, Event from the week?" {...props.fields.theme} />
  </form>
);

ThemesInputComponent = reduxForm({
  form: 'addTheme',
  fields: ['theme']
})(ThemesInputComponent);

ThemesInputComponent.displayName = 'ReflectionThemesInputComponent';

export default ThemesInputComponent;
