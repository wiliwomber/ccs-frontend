"use strict";

import React from 'react';

import { CourseList } from '../components/CourseList';

import CourseService from '../services/CourseService';
import UserService from "../services/UserService";
import MovieService from "../services/MovieService";
import HttpService from "../services/HttpService";


export class CourseListView extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            loading: false,
            data: []
        };

        //in case a new course is created, the component is updated so that the new course is displayed in the list
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

    //adds course to schedule
    chooseCourse(id) {
        UserService.selectCourse(id);
    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <CourseList data={this.state.data} onAdd={(id) => this.chooseCourse(id)}/>
        );

    }

}


