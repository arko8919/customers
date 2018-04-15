import React from 'react';

export const CloseAlertButton = (props) => {
    return (
        <button
            className='alert-button'
            onClick={props.onAlertClick}
        >
            Close
        </button>
    )
};