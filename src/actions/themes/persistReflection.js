import { submitReflections } from '../../requests';

module.exports = function() {
  return function(dispatch, getState) {
    let themes = getState().themes.get('items');
    let serverData = getServerData(themes);

    dispatch({ type: 'PERSIST_THEME_START', serverData });

    submitReflections(serverData).then((collection) => {
      dispatch({ type: 'PERSIST_THEME_SUCCESS' });
      window.location.href = '#/finish/' + collection.id;
    });
  };
}

function getServerData(themes) {
  return themes.map(theme => {
    return {
      name: theme.get('name'),
      html: theme.get('htmlReflection'),
      secondsOfWriting: theme.get('secondsOfWriting')
    };
  }).toJS();
}
