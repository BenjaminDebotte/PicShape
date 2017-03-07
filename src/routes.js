import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App/App';
import Upload from './components/Upload/Upload';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Account/Login';
import Gallery from './components/Gallery/Gallery';
import Signup from './components/Account/Signup';
import Profile from './components/Account/Profile';
import Forgot from './components/Account/Forgot';
import Reset from './components/Account/Reset';
import About from './components/About/About';


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

    const clearMessages = () => {
        store.dispatch({
            type: 'CLEAR_MESSAGES'
        });
    };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={Upload} onEnter={ensureAuthenticated} onLeave={clearMessages}/>
            <Route path="/login" component={Login} onLeave={clearMessages} />
            <Route path="/signup" component={Signup} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
            <Route path="/account" component={Profile} onEnter={ensureAuthenticated} onLeave={clearMessages} />
            <Route path="/gallery" component={Gallery} onEnter={ensureAuthenticated} onLeave={clearMessages} />
            <Route path="/forgot" component={Forgot} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
            <Route path='/reset/:token' component={Reset} onEnter={skipIfAuthenticated}  onLeave={clearMessages}/>
            <Route path="/about" component={About} onLeave={clearMessages}/>
            <Route path="*" component={NotFound}/>
        </Route>
    );
}
