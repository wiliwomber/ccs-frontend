"use strict";

import React from 'react';

import AddCourse from '../components/AddCourse';
import CourseService from "../services/CourseService";
import {CourseList} from "../components/CourseList";
import {CourseListView} from "./CourseListView";
import UserService from "../services/UserService";
import { Snackbar } from 'rmwc/Snackbar';

var SnackMessage = "";

export class AddCourseView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          course : undefined
        };
    }

    createCourse(course) {
            console.log(course);
            CourseService.createCourse(course).then((data) => {
                UserService.notifyListeners("newCourse");
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating course'}));
            });
            SnackMessage = "Course " + course.title + " successfully added";
            this.setState({snackbarIsOpen: !this.state.snackbarIsOpen});
        }


    render() {

        return (<div>
            <AddCourse course={this.state.course} onSubmit={(course) => this.createCourse(course)} error={this.state.error} />
            {/*<Snackbar*/}
                {/*show={this.state.snackbarIsOpen}*/}
                {/*onHide={evt => this.setState({snackbarIsOpen: false})}*/}
                {/*message={SnackMessage}*/}
                {/*actionText=""*/}
                {/*actionHandler={() => alert('Action clicked')}*/}
            {/*/>*/}
        </div>);
    }
}
