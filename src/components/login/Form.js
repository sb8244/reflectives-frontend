'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';
import sendPasswordless from '../../actions/login/sendPasswordless';
import {SUBMITTING, SUCCESS} from '../../reducers/auth';

function submit(values, dispatch) {
  dispatch(sendPasswordless(values.user));
}

let LoginForm = (props) => {
  if (props.sendPasswordless !== SUCCESS) {
    return (
      <form className='text-center' onSubmit={props.handleSubmit(submit)}>
        <input type='email' required placeholder='pat.smith@example.com' {...props.fields.user} />
        <input type='submit' disabled={props.sendPasswordless === SUBMITTING} className='button hollow' value='Get Login Link' />
      </form>
    );
  } else {
    return (
      <div className='text-center'>
        <strong>Login submitted! You will receive an email with a login url shortly.</strong>
      </div>
    )
  }
};

LoginForm = reduxForm({
  form: 'login',
  fields: ['user']
})(LoginForm);

LoginForm.displayName = 'LoginForm';

export default LoginForm;
