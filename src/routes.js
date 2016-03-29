import WiredThemesForm from './containers/WiredThemesForm';
import WiredThemeReflectionComponent from './containers/WiredThemeReflectionComponent';
import FinishComponent from './components/reflection/FinishComponent';

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
    component: FinishComponent
  }
];
