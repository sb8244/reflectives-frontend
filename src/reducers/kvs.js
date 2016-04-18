const Immutable = require('immutable');
export const initialState = Immutable.Map({});

export default function(state = initialState, { type, key, value }) {
  switch(type) {
    case 'SET_KVP': {
      if (value !== undefined) {
        state = state.set(key, value);
      } else {
        state = state.delete(key);
      }

      break;
    }
  }

  return state;
}
