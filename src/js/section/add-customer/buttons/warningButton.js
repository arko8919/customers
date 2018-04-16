import React from 'react';

export const WarningButton = props => {
    return (
        <button
            className='warning-button'
            onClick={props.onClick}
        >
            Close
        </button>
    )
};