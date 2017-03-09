require('babel-polyfill');
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Sidebar from 'js/components/sidebar';
import Inbox from './inbox';
import Spam from './spam';

const routes =(
    <Router history={hashHistory}>
        <Route path="/" component={Sidebar}>
            <IndexRoute component={ContactListContainer} />
            <Route path="/inbox" component={Inbox} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<routes />, document.getElementById('root'))
);
