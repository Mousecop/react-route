require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Sidebar from './components/sidebar';
import Inbox from './components/inbox';
import Spam from './components/spam';

const routes =(
    <Router history={hashHistory}>
        <Route path='/' component={Sidebar} />
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes , document.getElementById('root'))
);
