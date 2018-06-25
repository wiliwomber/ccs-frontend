import React from 'react';
import './../../node_modules/material-components-web/dist/material-components-web.min.css';
import { Snackbar } from 'rmwc/Snackbar';
import UserService from "../services/UserService";

export class SnackbarService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            snackTimeout: 2750,
            snackMessage: 'Default message',
            snackbarIsOpen: false,
        };
    }

    componentDidMount(){
        UserService.registerListener("test", this.testSnack.bind(this));
    }

    testSnack(){
        this.setState({
            snackbarIsOpen: true,
            snackMessage: 'Hurra',
        });
    }



    render() {
        return (
                <Snackbar
                    show={this.state.snackbarIsOpen}
                    onHide={evt => this.setState({snackbarIsOpen: false})}
                    message={this.state.snackMessage}
                    timeout={this.state.snackTimeout}
                    actionText=""
                    actionHandler={() => alert('Action clicked')}
                />
        )
    }

}

export default SnackbarService;
