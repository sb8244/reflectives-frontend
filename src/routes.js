import WiredThemesForm from './containers/WiredThemesForm';
import WiredThemeReflectionComponent from './containers/WiredThemeReflectionComponent';
import WiredFinishComponent from './containers/WiredFinishComponent';
import WiredLoginComponent from './containers/WiredLoginComponent';
import {auth} from './auth';

export const routeConfig = [
  {
    path: '/',
    component: WiredThemesForm,
    onEnter: requireAuth
  },
  {
    path: '/auth',
    onEnter: submitAuth
  },
  {
    path: '/login',
    component: WiredLoginComponent
  },
  {
    path: '/logout',
    onEnter: logout
  },
  {
    path: '/reflect/:themeId',
    component: WiredThemeReflectionComponent
  },
  {
    path: '/reflect',
    component: WiredThemeReflectionComponent
  },
  {
    path: '/finish/:submissionId',
    component: WiredFinishComponent
  }
];

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function submitAuth(nextState, replace, callback) {
  var token, uid;
  ({ token, uid } = nextState.location.query);

  let authPromise = new Promise((resolve, reject) => {
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

  authPromise.then(() => {
    replace('/');
    callback();
  }).catch(() => {
    replace('/login');
    callback();
  });
}

function logout(nextState, replace) {
  auth.logout();
  replace('/login');
}
