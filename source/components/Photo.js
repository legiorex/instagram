// Core
import React from 'react';

export default (props) => {
    return props.secured ? null : <img className = 'photo' src = { props.src } />;
};
