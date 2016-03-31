module.exports = function(remindableId, timestamp) {
  return function(dispatch) {
    dispatch({ type: 'REMIND_AT_STARTED', remindableId, timestamp });

    setTimeout(function() {
      dispatch({ type: 'REMIND_AT_SUCCESS', remindableId, timestamp });
    }, 1000);
  };
}
