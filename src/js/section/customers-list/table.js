import React from 'react';

export class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayDate: undefined
        }
    }

    addRows(customerList) {
        const rows = [];
        for (let customerListIndex = 0; customerListIndex < customerList.length; customerListIndex++) {
            rows.push(
                <tr>
                    <td>{customerList[customerListIndex].name}</td>
                    <td>{customerList[customerListIndex].surname}</td>
                    <td>{customerList[customerListIndex].email}</td>
                    <td>{customerList[customerListIndex].phoneNumber}</td>
                    <td>{customerList[customerListIndex].age}</td>
                    <td>{customerList[customerListIndex].city}</td>
                </tr>
            )
        }
        this.setState({
            displayDate: rows
        })
    }

    componentWillMount() {
        this.addRows(this.props.customersList);

    }

    componentWillReceiveProps(nextProps) {
        this.addRows(nextProps.customersList);
    }


    render() {
        return (
            <div className='result'>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.displayDate}
                    </tbody>
                </table>
            </div>
        )
    }
}