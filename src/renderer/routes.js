import App from './pages/App';
import HomePage from './pages/home';
import DetailPage from './pages/detail';
import NotFountPage from './pages/404';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/detail',
        component: DetailPage,
      },
      {
        path: '*',
        component: NotFountPage,
      },
    ],
  },
];

export default routes;
