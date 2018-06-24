"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';
import { SimpleLink } from './SimpleLink';
import UserService from '../services/UserService';
import {CourseDetailView} from "../views/CourseDetailView";



export class CourseListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TableRow key={this.props.key}>
                <TableColumn>{this.props.course.title}</TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><CourseDetailView course={this.props.course} /></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onAdd(this.props.course._id, this.props.course.title)} icon>add</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>add</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}
