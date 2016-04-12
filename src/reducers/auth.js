const Immutable = require('immutable');

export const INITIAL = 'initial';
export const SUBMITTING = 'submitting';
export const SUCCESS = 'success';

export const initialState = Immutable.Map({
  sendPasswordless: INITIAL
});

export default function(state = initialState, { type }) {
  switch(type) {
    case 'SEND_PASSWORDLESS_START': {
      state = state.set('sendPasswordless', SUBMITTING);
      break;
    }

    case 'SEND_PASSWORDLESS_SUCCESS': {
      state = state.set('sendPasswordless', SUCCESS);
      break;
    }

    case 'SEND_PASSWORDLESS_ERROR': {
      state = state.set('sendPasswordless', INITIAL);
      break;
    }
  }

  return state;
}
