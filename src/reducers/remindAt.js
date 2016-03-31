const Immutable = require('immutable');
export const initialState = Immutable.Map({});

export const REMIND_AT_SUBMITTING = 'submitting';
export const REMIND_AT_SUCCESS = 'success';

export default function(state = initialState, { remindableId, type }) {
  switch(type) {
    case 'REMIND_AT_STARTED': {
      state = state.set(remindableId, REMIND_AT_SUBMITTING);
      break;
    }

    case 'REMIND_AT_SUCCESS': {
      state = state.set(remindableId, REMIND_AT_SUCCESS);
      break;
    }
  }

  return state;
}
