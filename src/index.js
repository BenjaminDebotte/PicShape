import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import cookie from 'react-cookie';


import configureStore from './store/configureStore';
import getRoutes from './routes';

// Add the reducer to your store on the `routing` key
const store = configureStore(window.INITIAL_STATE);

const token = cookie.load('token');


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={getRoutes(store)}/>
    </Provider>,
    document.getElementById('root')
)
