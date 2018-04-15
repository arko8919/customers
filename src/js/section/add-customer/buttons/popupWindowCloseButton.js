import React from 'react';

export const PopupWindowCloseButton = props => {
    return (
        <button
            className='close-popup-window-button'
            onClick={props.onClick}
        >
            Close
        </button>
    )
};