"use strict";

import React from 'react';
import { Card, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom';
import { AlertMessage } from './AlertMessage';
import Page from './Page';
import {SelectField} from "react-md";
import styled from "styled-components";


const style = { maxWidth: 500 };
const StyledCard = styled(Card)`
    background: rgba(255,255,255,0.7);
    margin-top: 80px;
`;


const StyledButton = styled(Button)`
   align: right;
`;

const StyledButtonLeft = styled(Button)`

`;


class UserSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            semester : 1,
            courseOfStudies: '',
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeSemester = this.handleChangeSemester.bind(this);
        this.handleChangeCourseOfStudies = this.handleChangeCourseOfStudies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }
    handleChangeSemester(value) {
        this.setState(Object.assign({}, this.state, {semester: value}));
    }

    handleChangeCourseOfStudies(value){
        this.setState(Object.assign({}, this.state, {courseOfStudies: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            semester: this.state.semester,
            courseOfStudies: this.state.courseOfStudies,
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <Page>
                <StyledCard style={style} className="md-block-centered">
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
                            label="Semester"
                            id="SemesterField"
                            type="number"
                            className="md-row --12"
                            required={true}
                            value={this.state.semester}
                            onChange={this.handleChangeSemester}
                            errorText="Semester is required"/>
                        <SelectField
                            id="select-field-1"
                            lable="Course of studies"
                            placeholder="Course of studies"
                            className="md-row"
                            menuItems={["Computer Science","Physics","Chemistry","Information Science"]}
                            required={true}
                            value={this.state.courseOfStudies}
                            onChange={this.handleChangeCourseOfStudies}
                            simplifiedMenu = {true}
                            errorText="course of studies are required"
                            position={SelectField.Positions.BELOW}/>

                        <StyledButtonLeft id="submit" type="submit"
                                disabled={this.state.username == undefined || this.state.username == '' || this.state.password == undefined || this.state.password == '' ? true : false}
                                raised secondary className="md-row">Register</StyledButtonLeft>
                        <StyledButton id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</StyledButton>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </StyledCard>
            </Page>
        );
    }
};

export default withRouter(UserSignup);