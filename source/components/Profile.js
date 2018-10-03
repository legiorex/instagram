import React from 'react';
import avatar from '../theme/assets/avatars/nasa.jpg';
import Stories from '../components/Stories'
export default class Profile extends React.Component{
    render (){
        return (
            <div className='profile'>
                <img className= 'avatar'
                    src={avatar}
                />
            <div className='main'>
                <span className='nickname'>nasa</span>
                <div className='stats'>
                    <div>
                        <span>2.437&nbsp;</span>
                        posts
                    </div>
                    <div>
                        <span>34.9m&nbsp;</span>
                        followers
                    </div>
                    <div>
                        <span>70&nbsp;</span>
                        following
                    </div>
                </div>
            </div>
                <Stories />
            </div>
        );
    }
}
