import React from 'react';
export default class Header extends React.Component{
    render (){
        return (
            <div className='header'>
                <div className='logo' />
                <input
                    type="text"
                    placeholder='Search'
                />
                <div className='nav' >
                    <div className= 'explore'/>
                    <div className= 'likes'/>
                    <div className= 'settings'/>
                </div>
            </div>
        );
    }
}
