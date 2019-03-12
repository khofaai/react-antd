import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

class RouterView extends Component {
    render() {
        let routeComponents = routes.map((route, key) => <Route {...route} key={key} /> )
        return (
            <Switch>
                {routeComponents}
            </Switch>
        );
    }
}

export default RouterView;