import { fetchReflectionCollections } from '../../requests';

module.exports = function() {
  return function(dispatch) {
    fetchReflectionCollections().then((collections) => {
      dispatch({ type: 'LOAD_REFLECTION_COLLECTIONS', records: collections });
    });
  };
}
