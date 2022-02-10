import MainLayout from '@/layout/main-layout';
import Home from '@/pages/home';
import UserList from '@/pages/user/list';

const routeConfig = [
  { path: '/',
    component: MainLayout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/home', component: Home },
      { path: '/user/list', component: UserList },
    ]
  }
];

export default routeConfig;