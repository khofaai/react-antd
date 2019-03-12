import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';

export const routes = [
    {
        exact: true,
        path: '/',
        component: HomePage
    },
    {
        exact: false,
        path: '/login',
        component: LoginPage
    }
];

