"use strict";

import React from 'react';

import { CourseList } from '../components/CourseList';

import CourseService from '../services/CourseService';


export class CourseListView extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){
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

    chooseCourse(id) {
        this.setState({
            data: [...this.state.data]
        });
        console.log("choose course");
    }

    render() {
        if (this.state.loading) {
            return (<h2>State: Loading ...</h2>);
        }

        return (
            <CourseList data={this.state.data} onAdd={(id) => this.chooseCourse(id)}/>
        );
    }
}
