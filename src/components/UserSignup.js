"use strict";

import React from 'react';
import { Card, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom';

import { AlertMessage } from './AlertMessage';
import Page from './Page';


const style = { maxWidth: 500 };


class UserSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            matriculation : '',
            studentsemester : '',
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeMatriculation = this.handleChangeMatriculation.bind(this);
        this.handleChangeStudentsemester = this.handleChangeStudentsemester.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    handleChangeMatriculation(value) {
        this.setState(Object.assign({}, this.state, {matriculation: value}));
    }

    handleChangeStudentsemester(value) {
        this.setState(Object.assign({}, this.state, {studentsemester: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            matriculation: this.state.matriculation,
            studentsemester: this.state.studentsemester
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Username"
                            id="UsernameField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.username}
                            onChange={this.handleChangeUsername}
                            errorText="Username is required"/>
                        <TextField
                            label="Password"
                            id="PasswordField"
                            type="password"
                            className="md-row"
                            required={true}
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            errorText="Password is required"/>
                        <TextField
                            label="Matriculation Number"
                            id="MatriculationField"
                            type="Number"
                            className="md-row"
                            required={true}
                            value={this.state.matriculation}
                            onChange={this.handleChangeMatriculation}
                            errorText="Matriculation Number is required"/>
                        <TextField
                            label="Semester"
                            id="StudentSemesterField"
                            type="Number"
                            className="md-row"
                            required={true}
                            value={this.state.studentsemester}
                            onChange={this.handleChangeStudentsemester}
                            errorText="Semester is required"/>


                        <Button id="submit" type="submit"
                                disabled={this.state.username == undefined || this.state.username == '' || this.state.password == undefined || this.state.password == '' ? true : false}
                                raised primary className="md-cell md-cell--2">Register</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </Page>
        );
    }
}

export default withRouter(UserSignup)