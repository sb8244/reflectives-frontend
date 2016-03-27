import Immutable from 'immutable';

module.exports = function(index, mutableState) {
  let contentState = Immutable.fromJS(mutableState);
  return { type: 'UPDATE_THEME_DRAFT_EDITOR', index, contentState };
};
