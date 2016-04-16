export const auth = {
  loggedIn: function() {
    return !!localStorage.token
  },

  setToken: function(token) {
    localStorage.token = token;
  },

  getToken: function() {
    return localStorage.token;
  },

  logout: function() {
    delete localStorage.token;
  }
};
