import React from 'react';
import Data from './email-data';
import { Link } from 'react-router';

export default function Spam (props) {
    console.log('hit spam')
    const emailTitles = Object.keys(Data.spam).map(emailKey => {
      return (
        <div><Link to={'/email'}><strong>{Data.spam[emailKey].title}</strong></Link></div>
      )
    });
    return (
        <div className="spam">
            <h1>Spam</h1>
            {emailTitles}
        </div>
    );
}
