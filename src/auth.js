export const auth = {
  loggedIn: function() {
    return !!localStorage.token
  },

  setToken: function(token) {
    localStorage.token = token;
  },

  logout: function() {
    delete localStorage.token;
  },

  submitAuth: function(token, uid) {
    return new Promise((resolve, reject) => {
      if (token && uid) {
        let data = new FormData();
        data.append('token', token);
        data.append('uid', uid);
        fetch(`http://localhost:8001/auth?token=${token}&uid=${uid}`).then(response => {
          if (response.status === 200) {
            response.json().then(json => {
              auth.setToken(json.token);
              resolve();
            });
          } else { reject(); }
        }).catch(reject);
      } else {
        reject();
      }
    });
  }
};
