import React from 'react';
import Data from './email-data';
import { Link } from 'react-router';

export default function Inbox (props) {
    console.log('hit inbox');
    const emailTitles = Object.keys(Data.inbox).map(emailKey => {
      return (
        <div><Link to={'/email'}><strong>{Data.inbox[emailKey].title}</strong></Link></div>
      )
    });
    return (
        <div className="inbox">
            <h1>Inbox</h1>
            {emailTitles}
        </div>
    );
}
