"use strict";

import React from 'react';

import { CourseList } from '../components/CourseList';

import CourseService from '../services/CourseService';
import UserService from "../services/UserService";
import MovieService from "../services/MovieService";
import HttpService from "../services/HttpService";
import { Snackbar } from 'rmwc/Snackbar';

var SnackMessage = "Test";

export class CourseListView extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            loading: false,
            data: []
        };
        UserService.registerListener("newCourse", this.componentWillMount.bind(this));
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        CourseService.getCourses().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }




    /*
    deleteCourse(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        CourseService.deleteCourse(id).then((message) => {

            let courseIndex = this.state.data.map(course => course['_id']).indexOf(id);
            let courses = this.state.data;
            courses.splice(courseIndex, 1);
            this.setState({
                data: [...courses],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }
    */

    chooseCourse(id, title) {
        UserService.selectCourse(id);
        SnackMessage = title + " added to calendar";
        this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})
    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <div>
                <CourseList data={this.state.data} onAdd={(id, title) => this.chooseCourse(id, title)}></CourseList>
                <Snackbar
                    show={this.state.snackbarIsOpen}
                    onHide={evt => this.setState({snackbarIsOpen: false})}
                    message={SnackMessage}
                    actionText=""
                    actionHandler={() => alert('Action clicked')}
                />
            </div>
        );

    }

}


