import { submitReflections } from '../../requests';

module.exports = function() {
  return function(dispatch, getState) {
    let themes = getState().themes.get('items');
    let serverData = getServerData(themes);

    dispatch({ type: 'PERSIST_THEME_START', serverData });

    submitReflections(serverData).then((collection) => {
      dispatch({ type: 'PERSIST_THEME_SUCCESS' });
      window.location.href = '#/finish/' + collection.id;
    }).catch((response) => {
      if (response.message) {
        dispatch({ type: 'PERSIST_THEME_FAILED' });
        dispatch({ type: 'SET_FORM_MESSAGE', element: 'SUBMIT_REFLECTIONS', message: response.message });

        setTimeout(() => {
          dispatch({ type: 'CLEAR_FORM_MESSAGE', element: 'SUBMIT_REFLECTIONS' });
        }, 5000);
      }
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
