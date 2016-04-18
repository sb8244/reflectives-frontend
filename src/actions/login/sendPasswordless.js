import { sendPasswordless } from '../../requests';

module.exports = function(user) {
  return function(dispatch) {
    dispatch({ type: 'SEND_PASSWORDLESS_START' });

    sendPasswordless(user).
      then(() => dispatch({ type: 'SEND_PASSWORDLESS_SUCCESS' })).
      catch(() => dispatch({ type: 'SEND_PASSWORDLESS_ERROR' }));
  };
};
