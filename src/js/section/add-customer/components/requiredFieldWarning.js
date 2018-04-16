import React from 'react';

import {WarningButton} from '../buttons/warningButton';

export const RequiredFieldWarning = props => {
    return (
        <div className={`warning ${props.required}`}>
            <p>
                <span>{props.status}</span> is Required!
            </p>
            <WarningButton
                onClick={props.onAlertClick}
            />
        </div>
    )
};