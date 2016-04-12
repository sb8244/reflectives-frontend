'use strict';

import React from 'react';
import LoginForm from './login/Form';

let LoginComponent = (props) => {
  return (
    <div className="row align-center">
      <div className="medium-8 large-6 columns">
        <h3 className='text-center'>Login to Continue</h3>
        <p className='mt30'>
          You will receive an email with a one time login link when you enter your email below.
        </p>

        <LoginForm sendPasswordless={props.auth.get('sendPasswordless')} />
      </div>
    </div>
  );
};

LoginComponent.displayName = 'LoginComponent';

export default LoginComponent;
