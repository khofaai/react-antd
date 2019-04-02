import React from 'react';
import { Route } from 'react-router-dom';
import Estimation from '../components/Estimation';
import LoginPage from '../components/LoginPage';

export default ({ match }) => {
    return (
        <Estimation>
            <Route path={`${match.url}/edit`} component={LoginPage} />
            <Route path={`${match.url}/config`} component={Estimation} />
        </Estimation>
    )
}