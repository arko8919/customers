import React from 'react';

import {RequiredFieldWarning} from './requiredFieldWarning';
import {AddCustomerButton} from '../buttons/addCustomerButton';

export class NewCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: undefined,
            surname: undefined,
            email: undefined,
            phoneNumber: undefined,
            age: undefined,
            city: undefined
        };

        this.handleAddCustomerClick = this.handleAddCustomerClick.bind(this);
        this.handleWarningClick = this.handleWarningClick.bind(this);
    }

    handleWarningClick() {
        this.setState({
            required: 'hide'
        })
    }

    handleAddCustomerClick() {
        // create new customer object
        const customer = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            age: this.state.age,
            city: this.state.city
        };

        // check if required fields are fill
        if (this.state.name !== undefined && this.state.city !== undefined) {
            // update customer base
            this.props.onAddCustomerClick(customer);

            // NOTE !!!
            // This is not best solution when we involve directly DOM object.
            // reset form element
            document.getElementById('form').reset();
        } else {
            // show warning
            this.setState({
                required: 'show'
            });

            // check required fields
            if (this.state.name === undefined && this.state.city === undefined) {
                this.setState({
                    status: 'Name and City'
                });
            } else if (this.state.name === undefined) {
                this.setState({
                    status: 'Name'
                });
            } else if (this.state.city === undefined) {
                this.setState({
                    status: 'City'
                });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.name,
            surname: nextProps.surname,
            email: nextProps.email,
            phoneNumber: nextProps.phoneNumber,
            age: nextProps.age,
            city: nextProps.city
        });
    }

    render() {
        return (
            <div className='new-customer'>
                <AddCustomerButton
                    onClick={this.handleAddCustomerClick}
                />
                <RequiredFieldWarning
                    required={this.state.required}
                    onAlertClick={this.handleWarningClick}
                    status={this.state.status}
                />
            </div>
        )
    }
}