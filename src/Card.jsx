import React from 'react'

export const Card = () => {
    return  (
        <div id='card'>
            <h2>Welcome To the React <span>user</span></h2>
        </div>
    )
}

export const CardWithoutJSX = () => {
    return (
        React.createElement('div',{id:'card'}, 
            React.createElement('h2', null, 'Welcome to the REact',
                React.createElement('span', null, 'user')
            )
        )
    )
}