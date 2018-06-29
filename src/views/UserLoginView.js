"use strict";

import React from 'react';
import UserLogin from '../components/UserLogin';
import UserService from '../services/UserService';
import styled from "styled-components/";
import img from "./../img/background.jpg";
import './../App.css';

const Content = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    width: auto;
    height: 100vh;
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
            UserService.notifyListeners("Snack_LogIn");
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });

    }

    render() {
        return (
            <Content>
                <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}/>
            </Content>
        );
    }
}