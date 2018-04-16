import React from 'react';

import {PopupWindowButton} from './buttons/popupWindowButton';
import {PopupWindow} from './components/popupWindow';

export class AddCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'hidden',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClosePopupWindowClick = this.handleClosePopupWindowClick.bind(this);
    }

    // open and close popup window - top left button
    handleClick() {
        this.setState({
            display: this.state.display === 'hidden' ? 'visible' : 'hidden'
        })
    }

    handleClosePopupWindowClick(display) {
        this.setState({
            display: display
        })
    }

    render() {
        return (
            <div className='add-customer'>
                <PopupWindowButton
                    onClick={this.handleClick}
                />
                <PopupWindow
                    display={this.state.display}
                    onClosePopupWindowClick={this.handleClosePopupWindowClick}
                    onAddCustomerClick={this.props.onAddCustomerClick}
                />
            </div>
        )
    }
}

