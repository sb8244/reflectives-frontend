import tickThemeTimer from './tickThemeTimer';

module.exports = function(index) {
  return function(dispatch, getState) {
    let theme = getState().themes.get('items').get(index);
    if (!theme.get('timerId')) {
      let timerId = setInterval(() => {
        dispatch(tickThemeTimer(index));
      }, 1000);

      dispatch({ type: 'START_THEME_TIMER', index, timerId });
    }
  };
};
