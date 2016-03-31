const Immutable = require('immutable');
const initialState = Immutable.Map({
  items: Immutable.List([createEmptyTheme('Personal Health')]),
  submitting: false
});

function createEmptyTheme(name) {
  return Immutable.Map({
    name: name
  })
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_THEME': {
      if (state.get('items').indexOf(action.theme) === -1) {
        state = state.set('items', state.get('items').unshift(createEmptyTheme(action.theme)));
      }
      break;
    }

    case 'REMOVE_THEME': {
      state = state.set('items', state.get('items').delete(action.index));
      break;
    }

    case 'START_THEME_TIMER': {
      let theme = state.get('items').get(action.index);
      let newTheme = theme.set('timerId', action.timerId);
      state = state.set('items', state.get('items').set(action.index, newTheme));
      break;
    }

    case 'END_THEME_TIMER': {
      let theme = state.get('items').get(action.index);
      clearInterval(theme.get('timerId'));
      let newTheme = theme.set('timerId', undefined);
      state = state.set('items', state.get('items').set(action.index, newTheme));
      break;
    }

    case 'TICK_THEME_TIMER': {
      let theme = state.get('items').get(action.index);
      let oldTime = theme.get('secondsOfWriting') || 0;
      let newTheme = theme.set('secondsOfWriting', oldTime += 1);
      state = state.set('items', state.get('items').set(action.index, newTheme));
      break;
    }

    case 'UPDATE_THEME_DRAFT_EDITOR': {
      let theme = state.get('items').get(action.index);
      let newTheme = theme.set('contentState', action.contentState).set('htmlReflection', action.html);
      state = state.set('items', state.get('items').set(action.index, newTheme));
      break;
    }

    case 'PERSIST_THEME_START': {
      state = state.set('submitting', 'submitting');
      break;
    }

    case 'PERSIST_THEME_SUCCESS': {
      state = state.set('submitting', 'success');
      break;
    }
  }

  return state;
}
