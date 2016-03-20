/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  items: []
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

  switch(action.type) {

    case 'ADD_THEME': {
      nextState.items.push(action.theme);
      return nextState;
    }

    case 'REMOVE_THEME': {
      nextState.items.splice(action.index, 1);
      return nextState;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
