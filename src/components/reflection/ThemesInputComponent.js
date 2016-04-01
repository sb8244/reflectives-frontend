'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';
import addTheme from '../../actions/themes/addTheme';
import {reset} from 'redux-form';

function addThemeSubmit(values, dispatch) {
  dispatch(addTheme(values.theme));
  dispatch(reset('addTheme'));
}

function hasThemeValue(props) {
  return props.fields.theme.value;
}

function themeInput(props) {
  let className = hasThemeValue(props) ? 'input-group-field' : '';
  return (
    <input type='text' className={className} required placeholder='Personal health, Professional goals, Event from the week?' {...props.fields.theme} />
  )
}

function themeSubmit(props) {
  if (hasThemeValue(props)) {
    return (
      <div className='input-group-button'>
        <input type='submit' className='button secondary hollow' value='↵' />
      </div>
    );
  }
}

let ThemesInputComponent = (props) => (
  <form className='reflection-themes--form' onSubmit={props.handleSubmit(addThemeSubmit)}>
    <div className={ hasThemeValue(props) ? 'input-group' : '' }>
      { themeInput(props) }
      { themeSubmit(props) }
    </div>
  </form>
);

ThemesInputComponent = reduxForm({
  form: 'addTheme',
  fields: ['theme']
})(ThemesInputComponent);

ThemesInputComponent.displayName = 'ReflectionThemesInputComponent';

export default ThemesInputComponent;
