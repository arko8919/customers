import React from 'react';
// components
import {OverlayButton} from './buttons/overlayButton';
import {CloseOverlayButton} from './buttons/closeOverlayButton';
import {Form} from './form';
import {AddButton} from './buttons/addCustomerButton';
import {CloseAlertButton} from './buttons/closeAlertButton';

export class AddCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'hidden',
            required: 'hide',
            state: 'Name and City'
        };

        // bindings
        this.handleClick = this.handleClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleAddCustomerClick = this.handleAddCustomerClick.bind(this);
        this.handleAlertClick = this.handleAlertClick.bind(this);
    }

    // open and close overlay - top left menu button
    handleClick() {
        this.setState({
            display: this.state.display === 'hidden' ? 'visible' : 'hidden'
        })
    }

    // close overlay - button inside overlay
    handleCloseClick() {
        this.setState({
            display: 'hidden'
        })
    }

    handleFormChange(name, value) {
        // computed property name syntax to update the state key corresponding to the given input name
        this.setState({
            [name]: value
        });
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
        if (customer.name !== undefined && customer.city !== undefined) {
            // update customer list - event handler from 'form' component
            this.props.onAddCustomerClick(customer);

            // NOTE !!!
            // This is not best solution when we involve directly DOM object.
            // reset form element
            document.getElementById('form').reset();

            // reset states
            this.state.name = undefined;
            this.state.surname = undefined;
            this.state.email = undefined;
            this.state.phoneNumber = undefined;
            this.state.age = undefined;
            this.state.city = undefined;
        } else {
            // show alert
            this.setState({
                required: 'show'
            });

            // check required fields
            if (this.state.name === undefined && this.state.city === undefined) {
                this.setState({
                    state: 'Name and City'
                });
            } else if (this.state.name === undefined) {
                this.setState({
                    state: 'Name'
                });
            } else if (this.state.city === undefined) {
                this.setState({
                    state: 'City'
                });
            }
        }
    }

    handleAlertClick() {
        this.setState({
            required: 'hide'
        })
    }

    render() {
        return (
            <div className='customer'>
                <OverlayButton
                    onClick={this.handleClick}
                />
                <div className={`overlay ${this.state.display}`}>
                    <h3>Add customer</h3>
                    <Form
                        onFormChange={this.handleFormChange}
                    />
                    <AddButton
                        onAddCustomerClick={this.handleAddCustomerClick}
                    />
                    <CloseOverlayButton
                        onCloseClick={this.handleCloseClick}
                    />
                    <div className={`alert ${this.state.required}`}>
                        <p>{this.state.state} is Required</p>
                        <CloseAlertButton
                            onAlertClick={this.handleAlertClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

