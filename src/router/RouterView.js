import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import EstimationRouter from './r-estimation';

import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';

class RouterView extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={LoginPage} />
                <HomePage>
                    <Route path='/estimation' component={EstimationRouter} />
                </HomePage>
            </Switch>
        );
    }
}

export default RouterView;
