import React from 'react';
import Inbox from './inbox';
import Spam from './spam';
import Data from './email-data';
import { Link } from 'react-router';

export default function Sidebar (props) {
        return (
            <div className="sidebar">
                <Link to={'/inbox'}><h4>Inbox</h4></Link>
                <Link to={'/spam'}><h4>Spam</h4></Link>
                <br />
                {props.children}
            </div>
        );
}
