import React from 'react';

export const PopupWindowButton = props => {
    return (
        <div className='top-menu'>
            <button onClick={props.onClick}>+</button>
        </div>
    )
};