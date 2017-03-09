import React from 'react';
import Data from './email-data';
import { Link } from 'react-router';

export default function Sidebar (props) {
        const boxNames = Object.keys(Data);
        const linkList = boxNames.map(box => <Link key={box} to={`/${box}`}><h4>{`${box[0].toUpperCase() + box.slice(1)}`}</h4></Link>);
        return (
            <div className="sidebar">
              {linkList}
            </div>
        );
}
