// Core
import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <div>
                    <a />
                </div>
                <input placeholder = 'Search' type = 'text' />
                <nav>
                    <a className = 'explore' />
                    <a className = 'likes' />
                    <a className = 'settings' />
                </nav>
            </div>
        );
    }
}
