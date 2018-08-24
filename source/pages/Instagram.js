// Core
import React from 'react';

// Components
import Header from '../components/Header';
import Content from '../components/Content';

export default class Instagram extends React.Component {
    constructor () {
        super();

        this.YEAR = '2018';

        console.log('→ constructor');

        this.fetchPosts = this.fetchPosts.bind(this);
        // this.state
    }

    fetchPosts () {
        // ...логику
    }

    render () {
        console.log('→ render');

        return (
            <>
                <Header />
                <Content />
                <footer>Сегодня {this.YEAR} год.</footer>
            </>
        );
    }
}

