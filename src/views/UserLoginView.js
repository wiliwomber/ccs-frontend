"use strict";

import React from 'react';
import UserLogin from '../components/UserLogin';
import UserService from '../services/UserService';
import { Snackbar } from 'rmwc/Snackbar';
import styled from 'styled-components';
import img from '../img/background.jpg';

var SnackMessage = "";

const Content = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    width: auto;
    height: auto;
    min-height: 1000px;
    background-size: contain;
    margin: 0px;
`;

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
            <Content>
                <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}></UserLogin>
                <Snackbar
                    show={this.state.snackbarIsOpen}
                    onHide={evt => this.setState({snackbarIsOpen: false})}
                    message={SnackMessage}
                    actionText=""
                    actionHandler={() => alert('Action clicked')}
                />
            </Content>
        );
    }
}