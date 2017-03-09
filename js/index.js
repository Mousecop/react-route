require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Mailbox from './components/mailbox';
import App from './components/app';
import Email from './components/email';

const routes =(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path=':mailboxName' component={Mailbox}>
            <Route path=':emailId' component={Email} />
          </Route>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes , document.getElementById('root'))
);
