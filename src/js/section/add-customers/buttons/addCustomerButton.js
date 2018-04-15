import React from 'react';

export const AddButton = (props) => {
    return (
        <button className='add-customer-button' onClick={props.onAddCustomerClick}>Add</button>
    )
};
