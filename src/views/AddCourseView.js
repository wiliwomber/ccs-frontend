"use strict";

import React from 'react';

import AddCourse from '../components/AddCourse';
import CourseService from "../services/CourseService";
import {CourseList} from "../components/CourseList";
import {MDCSnackbar} from '@material/snackbar';
import {CourseListView} from "./CourseListView";
import UserService from "../services/UserService";

const Snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));


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
        }


    render() {

        return (<div>
            <AddCourse course={this.state.course} onSubmit={(course) => this.createCourse(course)} error={this.state.error} />
        </div>);
    }
}
