/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import themes from '../reducers/themes';
import remindAt from '../reducers/remindAt';

/* Populated by react-webpack-redux:reducer */
const reducers = {
  form: formReducer,
  themes,
  remindAt
};
module.exports = combineReducers(reducers);
