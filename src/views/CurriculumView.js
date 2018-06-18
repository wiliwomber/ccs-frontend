"use strict";

import React from 'react';
import styled from 'styled-components';
import {SemesterProgressBlock} from "../components/SemesterProgressBlock";
import UserService from "../services/UserService";
import HttpService from "../services/HttpService";
import MovieService from "../services/MovieService";

const Semester = styled.div`
    width: 100px;
    margin: 5px;
    height: 100%;
    max-height: 50px;
    float: left;
    border: solid;
    border-width: 2px;
    border-color: grey;
`;


export class CurriculumView extends React.Component {

    constructor(props) {
        super(props);
        let user = this.updateUserSemester();
        console.log(user)
    }


    render() {
        return (
            <div className="md-grid">
                <div className="md-cell md-cell--4 md-cell--8-tablet">
                    <SemesterProgressBlock/>
                </div>
                <div className="md-cell md-cell--8 md-cell--8-tablet">

                </div>
            </div>

        )
    }

    updateUserSemester() {
            UserService.updateUser().then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating movie'}));
            });
        }
}






