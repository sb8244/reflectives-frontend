import WiredThemesForm from './containers/WiredThemesForm';
import WiredThemeReflectionComponent from './containers/WiredThemeReflectionComponent';

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
  }
];
