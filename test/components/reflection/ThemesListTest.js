/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ThemesList from 'components/reflection/ThemesList.js';

describe('ThemesList', () => {
  let tree, props, clicks;

  beforeEach(() => {
    clicks = { removeTheme: 0 };
    props = {
      themes: ['Theme 1', 'Theme 2'],
      removeTheme: () => { clicks.removeTheme++ }
    };
    ({ tree } = createComponent(ThemesList, props));
  });

  it('includes both themes', () => {
    expect(tree.text()).to.include('Theme 1');
    expect(tree.text()).to.include('Theme 2');
  });

  it('includes remove buttons', () => {
    expect(tree.subTree('span').text()).to.equal('×');
    tree.subTree('span').props.onClick();
    expect(clicks.removeTheme).to.equal(1);
  });
});
