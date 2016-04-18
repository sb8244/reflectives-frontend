const Immutable = require('immutable');

export const initialState = Immutable.Map({
  records: Immutable.List()
});

export default function(state = initialState, { type, records }) {
  switch(type) {
    case 'LOAD_REFLECTION_COLLECTIONS': {
      state = state.set('records', Immutable.fromJS(records));
      break;
    }
  }

  return state;
}
