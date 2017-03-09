import React from 'react';

export default function Inbox (props) {
    return (
        <div className="inbox">
            <p>Inbox</p>
           <p> {props.displayInbox} </p>
        </div>
    );
}