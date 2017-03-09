import React from 'react';
import Data from './email-data';
import { Link } from 'react-router';
import Email from './email';

export default function Mailbox (props) {
    const mailboxName = props.params.mailboxName;
    const emailTitles = Object.keys(Data[mailboxName]).map((emailKey) => {
      return (
        <div key={emailKey}><Link to={`/${mailboxName}/${emailKey}`}><strong>{Data[mailboxName][emailKey].title}</strong></Link></div>
      )
    });
    return (
        <div className="mailbox">
            <h1>{mailboxName.toUpperCase()}</h1>
            {emailTitles}
            {props.children}
        </div>
    );
}
