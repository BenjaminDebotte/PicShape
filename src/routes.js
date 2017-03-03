import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App/App';
import Upload from './components/Upload/Upload';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import Profile from './components/Account/Profile';
import Forgot from './components/Account/Forgot';
import Reset from './components/Account/Reset';


export default function getRoutes(store) {
    const ensureAuthenticated = (nextState, replace) => {
        if (!store.getState().auth.token) {
            replace('/login');
        }
    };
    const skipIfAuthenticated = (nextState, replace) => {
        if (store.getState().auth.token) {
            replace('/');
        }
    };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={Upload} onEnter={ensureAuthenticated}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} onEnter={skipIfAuthenticated}/>
            <Route path="/account" component={Profile} onEnter={ensureAuthenticated} />
            <Route path="/forgot" component={Forgot} onEnter={skipIfAuthenticated} />
            <Route path='/reset/:token' component={Reset} onEnter={skipIfAuthenticated} />

            <Route path="*" component={NotFound}/>
        </Route>
    );
}
