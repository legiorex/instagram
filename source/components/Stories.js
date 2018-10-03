import React from 'react';
import images from '../theme/assets/stories';
import Story from './Story';
export default class Images extends React.Component{
    render (){
        const storiesJSX = images.map((story) =>{
            return <Story
                key = {story.id}
                src = {story.src}
                message = {story.message}
            />
        })
        return (
            <div className='stories'>
                {storiesJSX}
            </div>
        );
    }
}
