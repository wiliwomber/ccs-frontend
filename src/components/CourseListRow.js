"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button} from 'react-md';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';
import {CourseDetailView} from "../views/CourseDetailView";



export class CourseListRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    //opens the detail view popup
    openDetail(){
        this.setState({
            open: true
        });
    }
    //closes the detail view popup
    closeDetail(){
        this.setState({
            open: false
        });
    }

    render() {

        return (
            <TableRow key={this.props.key}>

                <TableColumn>
                    {this.props.course.title}
                </TableColumn>
                <TableColumn>
                    {this.props.course.credits}
                </TableColumn>

                {UserService.isAuthenticated() ?
                    <TableColumn>
                        <Button onClick={this.openDetail} icon>visibility</Button>
                        <CourseDetailView course={this.props.course} open={this.state.open} close={this.closeDetail}/>
                    </TableColumn>

                    : <TableColumn>
                        <Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link>
                    </TableColumn>
                }

                {UserService.isAuthenticated() ?
                    <TableColumn>
                        <Button onClick={() => this.props.onAdd(this.props.course._id)} icon>add</Button>
                    </TableColumn>

                    : <TableColumn>
                        <Link to={'/login'}><FontIcon>add</FontIcon></Link>
                    </TableColumn>
                }

            </TableRow>
        );
    }
}
