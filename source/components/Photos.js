// Core
import React from 'react';

// Instruments
import { photos } from '../theme/assets/images/photos';

// Component
import Photo from './Photo';

export default class Photos extends React.Component {
    render () {
        const photosJSX = photos.map((photo) => {
            // Клавиатура Бирмана
            // console.log('→ photo', photo);

            return <Photo key = { photo.id } secured = { photo.secured } src = { photo.src } />;
        });

        return <div className = 'photos'>{photosJSX}</div>;
    }
}
