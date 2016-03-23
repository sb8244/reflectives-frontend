import ThemesForm from './components/reflection/ThemesForm';
import ThemeReflectionComponent from './components/reflection/ThemeReflectionComponent';

export const routeConfig = [
  {
    path: '/',
    component: ThemesForm
  },
  {
    path: '/reflect/:themeId',
    component: ThemeReflectionComponent
  },
  {
    path: '/reflect',
    component: ThemeReflectionComponent
  }
];
