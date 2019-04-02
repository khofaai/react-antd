import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import Estimation from '../components/Estimation';

export const routes = [
    {
        exact: false,
        path: '/',
        component: HomePage,
        children: [
            {
                exact: false,
                path: '/estimation',
                component: Estimation
            }
        ]
    },
    {
        exact: false,
        path: '/login',
        component: LoginPage
    }
    
];

