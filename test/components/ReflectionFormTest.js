/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ReflectionForm from 'components//ReflectionForm.js';

describe('ReflectionForm', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ReflectionForm);
  });

  xit('passes themes to a ThemeList');
  xit('passes removeTheme action to ThemeList');
  xit('includes a ThemesInputComponent');
  xit('says "Start Reflection" with themes');
  xit('says "Enter Themes" without themes');
});
