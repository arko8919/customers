import React from 'react';

export const CloseOverlayButton = (props) => {
    return (
        <button
            className='close-overlay-button'
            onClick={props.onCloseClick}
        >
            Close
        </button>
    )
};