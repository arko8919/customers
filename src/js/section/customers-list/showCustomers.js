import React from 'react';
// components
import {Table} from './table';
import {Search} from './search/search';

export class ShowCustomers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customersList: undefined,
        };

        // bindings
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
    }

    // select customer by name
    handleNameChange(list) {
        this.setState({
            customersList: list
        });
    }

    // select customer by city
    handleCityChange(list) {
        this.setState({
            customersList: list
        });
    }

    // use current customer list
    componentWillMount() {
        this.setState({
            customersList: this.props.customersList
        })
    }

    render() {
        return (
            <div className='container'>
                <Search
                    customersList={this.props.customersList}
                    onNameChange={this.handleNameChange}
                    onCityChange={this.handleCityChange}
                />
                <Table
                    customersList={this.state.customersList}
                />
            </div>
        )
    }
}