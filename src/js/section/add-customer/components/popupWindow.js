import React from 'react';

import {PopupWindowCloseButton} from '../buttons/popupWindowCloseButton';
import {Form} from './form';
import {NewCustomer} from './newCustomer';


export class PopupWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'hidden',
        };

        this.onClick = this.onClick.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleAddCustomerClick = this.handleAddCustomerClick.bind(this);
    }

    // close popup window - button inside popup window
    onClick() {
        this.setState({
            display: 'hidden'
        });
    }

    handleFormChange(name, value) {
        // computed property name syntax to update the state key corresponding to the given input name
        this.setState({
            [name]: value
        });
    }

    handleAddCustomerClick(customer) {
        this.props.onAddCustomerClick(customer);

        // reset previous customer data
        this.setState({
            name: undefined,
            surname: undefined,
            email: undefined,
            phoneNumber: undefined,
            age: undefined,
            city: undefined
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            display: nextProps.display
        })
    }

    render() {
        return (
            <div className={`popup-window ${this.state.display}`}>
                <h3>Add customer</h3>
                <Form
                    onFormChange={this.handleFormChange}
                />
                <NewCustomer
                    onAddCustomerClick={this.handleAddCustomerClick}
                    name={this.state.name}
                    surname={this.state.surname}
                    email={this.state.email}
                    phoneNumber={this.state.phoneNumber}
                    age={this.state.age}
                    city={this.state.city}
                />
                <PopupWindowCloseButton
                    onClick={this.onClick}
                />
            </div>
        )
    }
}