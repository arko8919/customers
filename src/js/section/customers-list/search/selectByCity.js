import React from 'react';

export class SelectByCity extends React.Component {
    constructor(props) {
        super(props);

        // bindings
        this.handleCityChange = this.handleCityChange.bind(this);
    }

    handleCityChange(e) {
        const selectedCity = e.target.value;
        this.props.onCityChange(selectedCity, this.cityOption(selectedCity, this.props.name));
    }

    // return list base on selected city
    cityOption(city, name) {
        const customerList = this.props.customersList;
        const sortedCustomerList = [];

        for (let customerListIndex = 0; customerListIndex < customerList.length; customerListIndex++) {
            if (customerList[customerListIndex].city === city &&
                customerList[customerListIndex].name === name) {
                sortedCustomerList.push(customerList[customerListIndex]);
            } else if (customerList[customerListIndex].city === city &&
                name === 'none') {
                sortedCustomerList.push(customerList[customerListIndex]);
            } else if (city === 'none' && name === customerList[customerListIndex].name) {
                sortedCustomerList.push(customerList[customerListIndex]);
            } else if (city === 'none' && name === 'none') {
                sortedCustomerList.push(customerList[customerListIndex]);
            }
        }
        return sortedCustomerList;
    }

    render() {
        return (
            <select
                onChange={this.handleCityChange}
                value={this.props.value}
            >
                {this.props.children}
            </select>

        )
    }
}