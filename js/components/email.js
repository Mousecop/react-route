import React from 'react';
import Data from './email-data';
import { Link } from 'react-router';


export default function Email (props) {
  const {mailboxName, emailId} = props.params;
  const message = Data[mailboxName][emailId]
  return (
    <div>
      Title: {message.title}<br />
      To: {message.to}<br />
     From: {message.from}<br />
      <p>{message.content}</p>
    </div>
  );
}
