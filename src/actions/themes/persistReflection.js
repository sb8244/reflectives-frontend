module.exports = function() {
  return function(dispatch, getState) {
    let themes = getState().themes.get('items');
    let serverData = getServerData(themes);

    dispatch({ type: 'PERSIST_THEME_START', serverData });

    setTimeout(function() {
      let response = Object.assign({}, serverData, { id: 1 });
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
