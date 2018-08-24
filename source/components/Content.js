// Core
import React from 'react';

// Components
import Profile from './Profile';
import Photos from './Photos';

export default class Content extends React.Component {
    render () {
        return (
            <div className = 'content'>
                <Profile />
                <Photos />
            </div>
        );
    }
}
