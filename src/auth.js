export const auth = {
  loggedIn: function() {
    return !!localStorage.token
  }
};
