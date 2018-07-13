// Core
import React, { Component } from 'react';

// Instruments
import avatar from '../theme/assets/images/joe';

export default class Profile extends Component {
    render () {
        return (
            <div className = 'profile'>
                <img src = { avatar } />
                <div>
                    <div className = 'nickname'>Joey66</div>
                    <div className = 'stats'>
                        <span>
                            <span>39&nbsp;</span>
                            <span>posts</span>
                        </span>
                        <span>
                            <span>1256&nbsp;</span>
                            <span>followers</span>
                        </span>
                        <span>
                            <span>7&nbsp;</span>
                            <span>following</span>
                        </span>
                    </div>
                    <div className = 'name'>Joey Tribbiani</div>
                </div>
            </div>
        );
    }
}
