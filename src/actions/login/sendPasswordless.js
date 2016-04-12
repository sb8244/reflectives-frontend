module.exports = function(user) {
  return function(dispatch) {
    dispatch({ type: 'SEND_PASSWORDLESS_START' });

    let data = new FormData();
    data.append('user', user);
    fetch('http://localhost:8001/auth', {
      method: 'POST',
      body: data
    }).then(response => {
      response.json().then(() => {
        dispatch({ type: 'SEND_PASSWORDLESS_SUCCESS' });
      });
    }).catch(() => {
      dispatch({ type: 'SEND_PASSWORDLESS_ERROR' });
    });
  };
};
