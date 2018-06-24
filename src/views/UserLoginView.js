"use strict";

import React from 'react';

import UserLogin from '../components/UserLogin';

import UserService from '../services/UserService';
import { Snackbar } from 'rmwc/Snackbar';

var SnackMessage = "";

export class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user.username, user.password).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
        SnackMessage = "User logged in";
        this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})
    }

    render() {
        return (
            <div>
                <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}></UserLogin>
                <Snackbar
                    show={this.state.snackbarIsOpen}
                    onHide={evt => this.setState({snackbarIsOpen: false})}
                    message={SnackMessage}
                    actionText=""
                    actionHandler={() => alert('Action clicked')}
                />
            </div>
        );
    }
}