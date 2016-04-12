import WiredThemesForm from './containers/WiredThemesForm';
import WiredThemeReflectionComponent from './containers/WiredThemeReflectionComponent';
import WiredFinishComponent from './containers/WiredFinishComponent';
import WiredLoginComponent from './containers/WiredLoginComponent';
import {auth} from './auth';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export const routeConfig = [
  {
    path: '/',
    component: WiredThemesForm,
    onEnter: requireAuth
  },
  {
    path: '/login',
    component: WiredLoginComponent
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
