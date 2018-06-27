"use strict";

import React from 'react';
import UserLogin from '../components/UserLogin';
import UserService from '../services/UserService';

export class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user.username, user.password).then((data) => {
            this.props.history.push('/');
            UserService.notifyListeners("Snack_LogIn");
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
        // SnackMessage = "User logged in";
        // this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})
    }

    render() {
        return (
            <div>
                <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}></UserLogin>
            </div>
        );
    }
}