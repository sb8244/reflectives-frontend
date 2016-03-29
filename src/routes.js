import WiredThemesForm from './containers/WiredThemesForm';
import WiredThemeReflectionComponent from './containers/WiredThemeReflectionComponent';
import WiredFinishComponent from './containers/WiredFinishComponent';

export const routeConfig = [
  {
    path: '/',
    component: WiredThemesForm
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
    path: '/finish',
    component: WiredFinishComponent
  }
];
