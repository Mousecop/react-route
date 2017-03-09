import React from 'react';
import Inbox from './inbox';
import Spam from './spam';
import Data from './email-data';
import Sidebar from './sidebar';
import { Link } from 'react-router';

export default function App (props) {
  return (
    <div className='app-container'>
      <Sidebar />
      {props.children}
    </div>
  )
}
