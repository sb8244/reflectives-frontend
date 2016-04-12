const redux = require('redux');
const reducers = require('../reducers');
import ReduxThunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import Immutable from 'immutable';

let persistConfig = {
  serialize: function(collection) {
    if (collection.themes.get('submitting') === 'success') {
      return JSON.stringify({});
    }

    let serializableCollection = Object.assign({}, collection);
    serializableCollection.themes = serializableCollection.themes.toJSON();
    serializableCollection.themes.items.forEach(theme => {
      delete theme.timerId;
    });

    delete serializableCollection.remindAt;
    delete serializableCollection.auth;

    return JSON.stringify(serializableCollection);
  },
  deserialize: function(serializedData) {
    let data = JSON.parse(serializedData);

    if (!data) { return data; }

    if (data.themes) {
      data.themes = Immutable.fromJS(data.themes);
    }

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
      window.devToolsExtension ? window.devToolsExtension() : f => f
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
