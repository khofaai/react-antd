import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

class RouterView extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/' component={LoginPage} />
            </Switch>
        );
    }
}

export default RouterView;
