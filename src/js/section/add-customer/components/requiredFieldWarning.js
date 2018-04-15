import React from 'react';

import {WarningButton} from '../buttons/warningButton';

export const RequiredFieldWarning = props => {
    return (
        <div className={`warning ${props.required}`}>
            <p>{props.status} is Required</p>
            <WarningButton
                onAlertClick={props.onAlertClick}
            />
        </div>
    )
};