// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Header from '../components/Header';
import Content from '../components/Content';

@hot(module)
export default class Instagram extends Component {
    render () {
        return (
            <>
                <Header />
                <Content />
            </>
        );
    }
}
