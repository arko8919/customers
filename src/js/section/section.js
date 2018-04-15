import React from 'react';

import {ShowCustomers} from './display-customers/displayCustomers';
import {AddCustomer} from './add-customer/addCustomer';

export class Section extends React.Component {
    constructor(props) {
        super(props);

        // list of customers - this should be fetched from database
        this.state = {
            customersList: [{
                name: "Artur",
                surname: "Sas Dunajewski",
                email: "arko8919@gmail.com",
                phoneNumber: 7704214522,
                age: 28,
                city: "Coventry"
            }, {
                name: "John",
                surname: "Zharim",
                email: "Zharim@gmail.com",
                phoneNumber: 7703454522,
                age: 35,
                city: "London"
            }, {
                name: "Feiler",
                surname: "Lehar",
                email: "Lehar@gmail.com",
                phoneNumber: 7703454342,
                age: 25,
                city: "Warwick"
            }, {
                name: "Stave",
                surname: "Leonard-barton",
                email: "Leonard-barton@gmail.com",
                phoneNumber: 7234454342,
                age: 30,
                city: "London"
            }, {
                name: "Adam",
                surname: "Mola",
                email: "Mola@gmail.com",
                phoneNumber: 7234574342,
                age: 22,
                city: "Coventry"
            }],
        };

        this.handleAddCustomerClick = this.handleAddCustomerClick.bind(this);
    }

    // add new customer to customer list
    handleAddCustomerClick(newCustomer) {
        // get current customer list
        const customerBase = this.state.customersList;
        // push new customer to customer base
        customerBase.push(newCustomer);
        // update customer list with new customer base
        this.setState({
            customersList: customerBase
        })
    }

    render() {
        return (
            <section>
                <AddCustomer
                    onAddCustomerClick={this.handleAddCustomerClick}
                />
                <ShowCustomers
                    customersList={this.state.customersList}
                />
            </section>
        )
    }
}