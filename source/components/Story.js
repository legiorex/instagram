import React from 'react';
export default class Image extends React.Component {
    render() {
        return (
            <div className = 'story'>
                <div>
                    <img src = { this.props.src } />
                </div>

                <span>{this.props.message}</span>
            </div>
        );
    }
}
