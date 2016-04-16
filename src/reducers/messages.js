const Immutable = require('immutable');
export const initialState = Immutable.Map({});

export default function(state = initialState, { type, message, element }) {
  switch(type) {
    case 'SET_FORM_MESSAGE': {
      state = state.set(element, message);
      break;
    }

    case 'CLEAR_FORM_MESSAGE': {
      state = state.delete(element);
      break;
    }
  }

  return state;
}
