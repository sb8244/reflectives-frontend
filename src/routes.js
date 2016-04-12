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

  auth.submitAuth(token, uid).then(() => {
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
