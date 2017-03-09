import React from 'react';
import Data from './email-data';

export default function Spam (props) {
    console.log('hit spam')
    const emails = Object.keys(Data.spam).map(emailKey => {
      console.log(Data.spam[emailKey].title);
    });
    return (
        <div className="spam">
            <h1>Hi from spam</h1>
            {emails}
        </div>
    );
}
