const redux = require('redux');
const reducers = require('../reducers');
import ReduxThunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import Immutable from 'immutable';

let persistConfig = {
  serialize: function(collection) {
    let serializableCollection = Object.assign({}, collection);
    serializableCollection.themes = serializableCollection.themes.toJSON();
    return JSON.stringify(serializableCollection);
  },
  deserialize: function(serializedData) {
    let data = JSON.parse(serializedData);
    data.themes.items.forEach(theme => {
      delete theme.timerId;
    });
    data.themes = Immutable.fromJS(data.themes);
    return data;
  }
};

module.exports = function(initialState) {
  const store = redux.createStore(
    reducers,
    initialState,
    redux.compose(
      persistState(null, persistConfig),
      redux.applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
