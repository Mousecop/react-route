import React from 'react';
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
