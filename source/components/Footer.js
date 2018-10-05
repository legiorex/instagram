import React from 'react';
import links from '../theme/assets/links';
export default class Footer extends React.Component {
    render() {
        const linksArray = links.map((link) => {
            return <li key = { link.id }>{link.message}</li>;
        });

        return (
            <div className = 'footer'>
                <ul>{linksArray}</ul>
            </div>
        );
    }
}
