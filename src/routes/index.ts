import {Main} from '../components/main';

const routes = [
    {
      path: '/',
      component: Main,
      exact: true
    },
    {
      path: '*',
      component: Main,
      exact: true
    }
  ];

  export default routes;