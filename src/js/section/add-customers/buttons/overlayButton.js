import React from 'react';

export const OverlayButton = props => {
    return (
        <div className='topMenu'>
            <button onClick={props.onClick}>+</button>
        </div>
    )
};