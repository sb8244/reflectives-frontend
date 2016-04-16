export const auth = {
  loggedIn: function() {
    return !!localStorage.token
  },

  setToken: function(token) {
    localStorage.token = token;
  },

  logout: function() {
    delete localStorage.token;
  }
};
