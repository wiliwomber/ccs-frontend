import React from 'react';
import './../../node_modules/material-components-web/dist/material-components-web.min.css';
import { Snackbar } from 'rmwc/Snackbar';

class SnackbarX extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            snackTimeout: 2750,
            snackMessage: 'Default message',
            snackbarIsOpen: false,
        };
    }

    Show (message, timeout) {
        this.snackMessage = message;
        this.snackTimeout = timeout;
        this.state.snackbarIsOpen = true;
    }

    Hide () {
        this.state.snackbarIsOpen = false;
    }

    render() {
        return (
                <Snackbar
                    show={this.state.snackbarIsOpen}
                    onHide={evt => this.setState({snackbarIsOpen: false})}
                    message={this.snackMessage}
                    timeout={this.snackTimeout}
                    actionText=""
                    actionHandler={() => alert('Action clicked')}
                />
        )
    }

}

export default SnackbarX;
