const Immutable = require('immutable');
const initialState = Immutable.Map({
  items: Immutable.List([createEmptyTheme("Personal Health")])
});

function createEmptyTheme(name) {
  return Immutable.Map({
    name: name
  })
}

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_THEME': {
      if (state.get('items').indexOf(action.theme) === -1) {
        state = state.set('items', state.get('items').unshift(createEmptyTheme(action.theme)));
      }
    }

    case 'REMOVE_THEME': {
      state = state.set('items', state.get('items').delete(action.index));
    }
  }

  return state;
}
