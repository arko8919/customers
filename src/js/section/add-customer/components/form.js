import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(event) {
        // target field
        const target = event.target;
        // value of targeted field
        const value = target.value;
        // name of targeted field
        const name = target.name;

        this.props.onFormChange(name, value);
    }

    render() {
        return (
            <form id='form' onChange={this.handleFormChange}>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='surname' placeholder='Surname'/>
                <input type='email' name='email' placeholder='Email'/>
                <input type='tel' name='phoneNumber' placeholder='Phone Number'/>
                <input type='number' name='age' placeholder='Age'/>
                <input type='text' name='city' placeholder='City'/>
            </form>
        )
    }
}