let endThemeTimer = require('./endThemeTimer.js');

module.exports = function() {
  return function(dispatch, getState) {
    let themes = getState().themes.get('items');
    let serverData = getServerData(themes);

    dispatch({ type: 'PERSIST_THEME_START', serverData });

    setTimeout(function() {
      let response = Object.assign({}, serverData, { id: 1 });
      endAllTimers(themes, dispatch);
      dispatch({ type: 'PERSIST_THEME_SUCCESS' });
      window.location.href = '#/finish/' + response.id;
    }, 1000);
  };
}

function getServerData(themes) {
  return themes.map(theme => {
    return {
      name: theme.get('name'),
      html: theme.get('htmlReflection'),
      seconds_of_writing: theme.get('secondsOfWriting')
    };
  }).toJS();
}

function endAllTimers(themes, dispatch) {
  themes.forEach((theme, index) => {
    if (theme.get('timerId')) {
      dispatch(endThemeTimer(index));
    }
  })
}
