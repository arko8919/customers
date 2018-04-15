import React from 'react';

import {SelectByName} from './selectByName';
import {SelectByCity} from './selectByCity';

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [],
            cities: [],
            name: 'none',
            city: 'none'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
    }

    // pull out names
    displayNames(customerList) {
        return customerList.map((customer, index) => {
            index++;
            return <option key={`name${index}`}>{customer.name}</option>;
        })
    }

    // pull out cities
    displayCities(customerList) {
        return customerList.map((customer, index) => {
            index++;
            return <option key={`city${index}`}>{customer.city}</option>
        })
    }

    componentWillMount() {
        const customerList = this.props.customersList;
        this.setState({
            names: this.displayNames(customerList),
            cities: this.displayCities(customerList)
        });
    }

    componentWillReceiveProps(nextProps) {
        const customerList = nextProps.customersList;
        this.setState({
            names: this.displayNames(customerList),
            cities: this.displayCities(customerList)
        });
    }

    handleNameChange(selectedName, list) {
        // update name with selected option
        this.setState({
            name: selectedName
        });
        // pass selected customer list
        this.props.onNameChange(list);
    }

    handleCityChange(selectedCity, list) {
        // update city with selected option
        this.setState({
            city: selectedCity
        });
        // pass selected customer list
        this.props.onCityChange(list);
    }

    render() {
        return (
            <div className='select'>
                <div className='content'>
                    <div>Name</div>
                    <SelectByName
                        customersList={this.props.customersList}
                        onNameChange={this.handleNameChange}
                        value={this.state.name}
                        city={this.state.city}
                    >
                        <option>none</option>
                        {this.state.names}
                    </SelectByName>
                </div>

                <div className='content'>
                    <div>City</div>
                    <SelectByCity
                        customersList={this.props.customersList}
                        onCityChange={this.handleCityChange}
                        value={this.state.city}
                        name={this.state.name}
                    >
                        <option>none</option>
                        {this.state.cities}
                    </SelectByCity>
                </div>
            </div>
        )
    }
}