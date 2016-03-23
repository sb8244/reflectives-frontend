/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ThemesInputComponent from 'components/reflection/ThemesInputComponent.js';

describe('ThemesInputComponent', () => {
  let tree;

  beforeEach(() => {
    ({ tree } = createComponent(ThemesInputComponent));
  });

  describe('with an empty fields.theme value', function() {
    xit('includes a theme input element');
    xit('does not include a submit button');
    xit('does not include a input-group-field class on the theme input');
  });

  describe('with a fields.theme value', function() {
    xit('includes a theme input element');
    xit('includes a submit button');
    xit('includes input-group-field on the input');
  });
});
