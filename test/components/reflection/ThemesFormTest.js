/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ThemesForm from 'components/reflection/ThemesForm';

describe('ThemesForm', () => {
  let tree;

  beforeEach(() => {
    ({ tree } = createComponent(ThemesForm));
  });

  xit('passes themes to a ThemeList');
  xit('passes removeTheme action to ThemeList');
  xit('includes a ThemesInputComponent');
  xit('says "Start Reflection" with themes');
  xit('says "Enter Themes" without themes');
});
