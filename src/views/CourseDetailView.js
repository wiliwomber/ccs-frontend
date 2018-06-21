"use strict";

import React from 'react';

import AddCourse from '../components/AddCourse';
import CourseService from "../services/CourseService";
import CourseDetail from "../components/CourseDetail";


export class CourseDetailView extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {

        return (<div>
            <CourseDetail course={this.props.course}/>
        </div>);
    }
}
