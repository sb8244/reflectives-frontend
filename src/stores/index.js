const redux = require('redux');
const reducers = require('../reducers');
import ReduxThunk from 'redux-thunk';

module.exports = function(initialState) {
  const store = redux.createStore(
    reducers,
    initialState,
    redux.compose(
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
