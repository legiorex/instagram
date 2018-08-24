// Core
import React from 'react';

const Photo = (props) => {
    return props.secured ? null : (
        <div className = 'photo'>
            <img src = { props.src } />
        </div>
    );
};

export default Photo;
