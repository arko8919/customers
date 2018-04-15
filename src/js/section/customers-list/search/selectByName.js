import React from 'react';

export class SelectByName extends React.Component {

    constructor(props) {
        super(props);

        // bindings
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        const selectedName = e.target.value;
        this.props.onNameChange(selectedName, this.nameOption(selectedName, this.props.city));
    }

    //  return list base on selected name
    nameOption(name, city) {
        const customerList = this.props.customersList;
        const sortedCustomerList = [];

        for (let customerListIndex = 0; customerListIndex < customerList.length; customerListIndex++) {
            // check which customers selected options match
            if (customerList[customerListIndex].name === name &&
                customerList[customerListIndex].city === city) {
                sortedCustomerList.push(customerList[customerListIndex]);
                // check if one option match and other is none
            } else if (customerList[customerListIndex].name === name &&
                city === 'none') {
                sortedCustomerList.push(customerList[customerListIndex]);
            } else if (name === 'none' && city === customerList[customerListIndex].city) {
                sortedCustomerList.push(customerList[customerListIndex]);
            } else if (name === 'none' && city === 'none') {
                sortedCustomerList.push(customerList[customerListIndex]);
            }
        }
        return sortedCustomerList;
    }

    render() {
        return (
            <select
                onChange={this.handleNameChange}
                value={this.props.value}
            >
                {this.props.children}
            </select>

        )
    }

}