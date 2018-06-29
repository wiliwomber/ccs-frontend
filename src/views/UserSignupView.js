"use strict";

import React from 'react';
import UserSignup from '../components/UserSignup';
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

export class UserSignupView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
// user signup
    signup(user) {
        UserService.register(user.username, user.password, user.semester, user.courseOfStudies).then((data) => {
            this.props.history.push('/');
            UserService.notifyListeners("Snack_LogIn");
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        })
    }

    render() {
        return (
            <Content>
                <UserSignup onSubmit={(user) => this.signup(user)} error={this.state.error}></UserSignup>
            </Content>
        );
    }
}