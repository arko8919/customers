import React from 'react';

export const AddCustomerButton = (props) => {
    return (
        <button className='add-customer-button' onClick={props.onAddCustomerClick}>Add Customer</button>
    )
};
